# Creating a New OCC Endpoint for SAP Commerce Cloud (2211+)

The steps below assume you are working against the latest long-term release of SAP Commerce Cloud (2211) and that you already have a running `ycommercewebservices` (or custom OCC) extension. The flow follows the layered architecture (data → facade → controller) used by OCC.

## 1. Prerequisites
- Java 17, SAP Commerce Cloud 2211+ with OCC extensions installed
- Backoffice item type/cronjob/service definitions for the domain you are exposing
- OCC client or Postman collection to exercise the endpoint

## 2. Decide on the Contract
1. Identify the platform type or DTO that backs the endpoint.
2. Create a *Data* structure (e.g. `ProductStatusData`) in the OCC extension under `de.hybris.platform.ycommercewebservices.dto`.
3. Add populator/converter definitions in `resources/ycommercewebservices-spring.xml` so the facade can translate between models and DTOs.

## 3. Service/Facade Layer Changes
1. In your core extension, expose the required business logic in a service (`MyDomainService`).
2. Inject that service into a new facade (`MyDomainFacade`) inside the OCC extension and add a method that returns the DTO created above.
3. Register the facade bean in `*-spring.xml` and write unit tests with `ServicelayerBaseTest` to lock in the behavior.

## 4. OCC Controller Implementation
1. Create a controller class under `de.hybris.platform.ycommercewebservices.v2.controller`. Example skeleton:
   ```java
   @Controller
   @RequestMapping(value = "/{baseSiteId}/my-domain")
   @Api(tags = "My Domain")
   public class MyDomainController extends BaseController
   {
       @Resource(name = "myDomainFacade")
       private MyDomainFacade myDomainFacade;

       @GetMapping(value = "/status/{code}")
       @ResponseBody
       @ApiOperation(value = "Gets the status")
       public MyDomainData getStatus(@PathVariable final String code)
       {
           return myDomainFacade.getStatus(code);
       }
   }
   ```
2. Annotate the methods with Swagger (`@ApiOperation`, `@ApiParam`) so the automatically generated OCC API documentation stays complete.
3. Add input validation (e.g., `@NotBlank`, `DataMapper`) and respond with OCC exceptions such as `NotFoundException` when applicable.

## 5. Wire the Endpoint
- Update `web/webroot/WEB-INF/webmvc-config.xml` (or the equivalent `*-web-spring.xml`) so Spring MVC scans the new package.
- Register any new interceptors (e.g., for cart/session) in `webroot/WEB-INF/webmvc-config-interceptors.xml`.
- Extend the `ycommercewebservices` `spring-security-config.xml` if the endpoint requires authentication or special scopes.

## 6. OCC API Export and Contracts
1. Run `ant ycommercewebservices` followed by `ant apiexport` to refresh the Swagger/OpenAPI definition.
2. Add the new endpoint to the Postman collection under `hybris/bin/modules/integration-apis/export/postman`.
3. Communicate the contract change to frontend and integration consumers.

## 7. Build and Deploy
1. Execute `ant clean all` locally; fix compilation or unit test failures.
2. Push the change set to your fork and trigger a Commerce Cloud build (`build-server` pipeline).
3. Validate the endpoint via `GET https://<cluster-domain>/occ/v2/<baseSiteId>/my-domain/status/TEST`.

## 8. Troubleshooting Tips
- Use `hac` > Console > Beans to confirm the new controller and facade beans are present.
- Enable `DEBUG` logging for `de.hybris.platform.ycommercewebservices` to trace requests.
- Check `occ/v2` vs `occ/v2_1` versioning; if needed, duplicate the controller in the version-specific package.

Following the flow above gives you a cleanly layered OCC endpoint that is compatible with the latest SAP Commerce Cloud release and is ready for promotion through your pipelines.
