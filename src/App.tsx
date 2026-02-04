import { SiemensHeader } from './components/SiemensHeader';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SiemensHeader />
      
      {/* Demo Content Area */}
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Hero Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Modern Enterprise Header Component
                </h1>
                <p className="text-gray-600">
                  Redesigned with modern UI/UX principles for SAP Commerce Cloud environments
                </p>
              </div>
              <div className="px-4 py-2 bg-gradient-to-br from-green-500 to-green-600 text-white text-sm rounded-lg shadow-md">
                Production Ready
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Visual Enhancements */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-4 flex items-center justify-center text-white shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="mb-2">Visual Design</h3>
                <ul className="text-sm text-gray-700 space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Subtle gradients for depth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Glass morphism effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Soft shadows & elevation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Premium rounded corners</span>
                  </li>
                </ul>
              </div>

              {/* Micro-interactions */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-4 flex items-center justify-center text-white shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2">Interactions</h3>
                <ul className="text-sm text-gray-700 space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Smooth hover animations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Scale & glow effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Active state feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Status indicators</span>
                  </li>
                </ul>
              </div>

              {/* Component Architecture */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-200">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center text-white shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                  </svg>
                </div>
                <h3 className="mb-2">Structure</h3>
                <ul className="text-sm text-gray-700 space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Modular components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>8px grid system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Design tokens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Reusable variants</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design System Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Color Palette */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="mb-4">Enterprise Color System</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1a1e31] to-[#252a42] shadow-md" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Primary Background</div>
                    <div className="text-xs text-gray-500">#1a1e31 → #252a42</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#00b892] shadow-md" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Accent Gradient</div>
                    <div className="text-xs text-gray-500">#00d4aa → #00b892</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white border-2 border-gray-200 shadow-md backdrop-blur-sm" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Glass Morphism</div>
                    <div className="text-xs text-gray-500">rgba(255, 255, 255, 0.95)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive States */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="mb-4">Interactive States</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="text-sm font-medium mb-1">Default</div>
                  <div className="text-xs text-gray-500">Base state with subtle surface</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-100 border-2 border-[#00d4aa] shadow-md">
                  <div className="text-sm font-medium mb-1">Hover</div>
                  <div className="text-xs text-gray-500">Scale + glow + border accent</div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#00b892] text-white shadow-lg">
                  <div className="text-sm font-medium mb-1">Active</div>
                  <div className="text-xs opacity-90">Gradient fill with shadow</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="mb-6">Technical Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-[#00d4aa] mb-3">Design Tokens</h4>
                <div className="space-y-2 text-sm text-gray-300 font-mono">
                  <div>--transition-base</div>
                  <div>--header-shadow-glow</div>
                  <div>--header-surface</div>
                  <div>--spacing-md</div>
                </div>
              </div>
              <div>
                <h4 className="text-[#00d4aa] mb-3">Components</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>✓ Logo with hover effects</div>
                  <div>✓ Glass search bar</div>
                  <div>✓ Status indicators</div>
                  <div>✓ Badge notifications</div>
                </div>
              </div>
              <div>
                <h4 className="text-[#00d4aa] mb-3">Interactions</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>✓ Micro-animations</div>
                  <div>✓ Focus states</div>
                  <div>✓ Scale transitions</div>
                  <div>✓ Glow effects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
