import imgFigmaTest1 from "figma:asset/1b56deded5c0cad4248f863591ccbc6ecc947333.png";

export default function Frame({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col items-start p-[10px] relative w-[2066px]"}>
      <div className="aspect-[2046/235] relative shrink-0 w-full" data-name="Figma_Test 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFigmaTest1} />
      </div>
    </div>
  );
}