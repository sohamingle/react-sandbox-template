import { useState } from "react";
import { Icon } from "@iconify/react";

function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans relative">
      
      {/* App Header */}
      <header className="px-6 py-4 flex items-center justify-between bg-background sticky top-0 z-20 border-b border-border">
        <div>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Good Morning</p>
          <h1 className="text-2xl font-bold text-foreground">Alex Doe</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-background z-10"></span>
        </button>
      </header>

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        
        {/* Stories / Horizontal Scroll Section */}
        <section className="mt-4 pl-6">
           <div className="flex gap-4 overflow-x-auto no-scrollbar pr-6 pb-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-linear-to-tr from-yellow-400 to-fuchsia-600 p-[2px]">
                    <div className="w-full h-full rounded-full bg-card border-2 border-background flex items-center justify-center overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/150?u=${item}`} 
                        alt={`User ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-medium text-foreground/80">User {item}</span>
                </div>
              ))}
           </div>
        </section>

        {/* Featured Card */}
        <section className="px-6 mt-4">
          <div className="rounded-3xl p-6 shadow-lg relative overflow-hidden min-h-[200px] flex flex-col justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                alt="Abstract Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>
            
            <div className="relative z-10 text-white">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border border-white/10">New Update</span>
              <h2 className="text-2xl font-bold mt-4 mb-2">Pro Features Available</h2>
              <p className="text-white/90 text-sm mb-6 max-w-[80%]">Unlock unlimited possibilities with our new premium plan.</p>
              <button className="bg-white text-black px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-white/90 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </section>

        {/* List Section */}
        <section className="px-6 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">Recent Activity</h3>
            <button className="text-primary text-sm font-semibold">See All</button>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { icon: "mdi:wallet", color: "bg-blue-100 text-blue-600", title: "Payment Sent", sub: "To Sarah Smith", amount: "-$45.00" },
              { icon: "mdi:download", color: "bg-green-100 text-green-600", title: "Incoming Transfer", sub: "From Client", amount: "+$250.00" },
              { icon: "mdi:netflix", color: "bg-red-100 text-red-600", title: "Subscription", sub: "Netflix Premium", amount: "-$15.99" },
              { icon: "mdi:cart", color: "bg-orange-100 text-orange-600", title: "Shopping", sub: "Grocery Store", amount: "-$84.20" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-card rounded-2xl border border-border shadow-sm active:scale-[0.98] transition-transform">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                    <Icon icon={item.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>
                </div>
                <span className={`font-bold text-sm ${item.amount.startsWith('+') ? 'text-green-600' : 'text-foreground'}`}>
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="h-8"></div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="bg-card/90 backdrop-blur-lg border-t border-border sticky bottom-0 w-full z-20">
        <div className="flex items-center justify-around px-2 py-4">
           {[
             { id: 'home', icon: 'mdi:home-variant', label: 'Home' },
             { id: 'search', icon: 'mdi:magnify', label: 'Search' },
             { id: 'add', icon: 'mdi:plus-circle', label: '', isAction: true },
             { id: 'chat', icon: 'mdi:chat-processing-outline', label: 'Chat' },
             { id: 'profile', icon: 'mdi:account-circle-outline', label: 'Profile' },
           ].map((tab) => (
             <button 
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`flex flex-col items-center gap-1 transition-all duration-200 ${
                 tab.isAction 
                   ? '-mt-10' 
                   : activeTab === tab.id ? 'text-primary' : 'text-gray-400 hover:text-foreground'
               }`}
             >
               {tab.isAction ? (
                 <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 text-white transform active:scale-95 transition-transform">
                   <Icon icon={tab.icon} className="w-8 h-8" />
                 </div>
               ) : (
                 <>
                   <Icon 
                      icon={tab.icon} 
                      className={`w-6 h-6 ${activeTab === tab.id ? 'scale-110' : ''} transition-transform`} 
                   />
                   <span className="text-[10px] font-medium">{tab.label}</span>
                 </>
               )}
             </button>
           ))}
        </div>
      </nav>
    </div>
  );
}

export default Home;