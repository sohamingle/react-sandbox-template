import { Icon } from "@iconify/react";

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center font-sans p-6">
      <div className="text-center space-y-6 max-w-md">
        {/* Logo/Brand */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Design AI</h1>
          <p className="text-gray-500 text-sm">AI-Powered Design Platform</p>
        </div>

        {/* Main Content Area */}
        <div className="mt-12 space-y-4">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <div className="flex gap-2">
              <Icon
                icon="mingcute:loading-fill"
                className="animate-spin mt-0.5"
                aria-label="Loading"
              />
              <p className="text-foreground/70 text-sm text-wrap">
                Creating the perfect design for you...
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-gray-400">
            This will only take a few seconds...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
