import { useEffect, useState } from "react";

const Terminal = () => {
  const [logs, setLogs] = useState<string[]>([]);
  
  const terminalLogs = [
    '$ Initializing secure connection...',
    '> Establishing encrypted tunnel',
    '> AES-256 encryption: ACTIVE',
    '> Server: Tokyo-JP-01',
    '> Latency: 12ms',
    '> Status: CONNECTED ✓',
    '> IP masked successfully',
    '> Ready for secure browsing'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < terminalLogs.length) {
        setLogs(prev => [...prev, terminalLogs[currentIndex]]);
        currentIndex++;
      } else {
        // Reset after showing all logs
        setTimeout(() => {
          setLogs([]);
          currentIndex = 0;
        }, 3000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 w-[400px] max-w-[calc(100vw-4rem)] bg-card border border-border rounded-lg shadow-2xl overflow-hidden z-50 animate-slide-in-bottom">
      {/* Terminal Header */}
      <div className="bg-secondary px-4 py-3 flex items-center gap-3 border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm text-muted-foreground font-mono">secure-vpn@terminal</span>
      </div>
      
      {/* Terminal Body */}
      <div className="p-4 min-h-[200px] max-h-[300px] overflow-y-auto font-mono text-sm">
        {logs.map((log, index) => (
          <div 
            key={index} 
            className="text-primary mb-2 animate-terminal-line"
          >
            {log}
            {index === logs.length - 1 && (
              <span className="inline-block ml-1 w-2 h-4 bg-primary animate-terminal-cursor" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;