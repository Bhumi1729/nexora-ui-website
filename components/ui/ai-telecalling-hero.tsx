import React, { useState, useEffect } from 'react';
import { Play, TrendingUp, Users, Phone, Mic, Activity, BarChart3, Calendar, Clock, Target, Zap, Volume2 } from 'lucide-react';

const AITelecallingHero = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentCall, setCurrentCall] = useState(0);
  const [waveform, setWaveform] = useState(Array(60).fill(0));
  const [callProgress, setCallProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const callData = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      phone: "+1 (555) 123-4567",
      sentiment: "Positive",
      status: "Hot Lead",
      transcript: "Yes, I'm definitely interested in learning more about your premium package. When can we schedule a detailed demo?",
      duration: "2:34",
      score: 92,
      avatar: "SJ",
      tags: ["Decision Maker", "Enterprise"]
    },
    {
      name: "Mike Chen",
      company: "Growth Solutions",
      phone: "+1 (555) 987-6543",
      sentiment: "Neutral",
      status: "Follow-up",
      transcript: "I need to discuss this with my team first. Can you send me the pricing details and call back next week?",
      duration: "3:12",
      score: 74,
      avatar: "MC",
      tags: ["Consideration", "Mid-Market"]
    },
    {
      name: "Emma Davis",
      company: "Scale Dynamics",
      phone: "+1 (555) 456-7890",
      sentiment: "Very Positive",
      status: "Qualified",
      transcript: "This is exactly what we've been looking for! I'd like to move forward with the implementation.",
      duration: "4:45",
      score: 96,
      avatar: "ED",
      tags: ["Ready to Buy", "Enterprise"]
    }
  ];

  const dashboardMetrics = [
    { label: "Active Campaigns", value: "24", change: "+12%", icon: Target, color: "from-emerald-500 to-emerald-600" },
    { label: "Calls Today", value: "1,847", change: "+8%", icon: Phone, color: "from-green-500 to-green-600" },
    { label: "Conversion Rate", value: "23.4%", change: "+5.2%", icon: TrendingUp, color: "from-emerald-600 to-green-600" },
    { label: "Revenue Generated", value: "$89.2K", change: "+15%", icon: BarChart3, color: "from-green-600 to-emerald-700" }
  ];

  const recentCalls = [
    { name: "Alex Rodriguez", status: "converted", time: "2 min ago", score: 95 },
    { name: "Jennifer Liu", status: "callback", time: "5 min ago", score: 78 },
    { name: "David Park", status: "not-interested", time: "8 min ago", score: 45 },
    { name: "Maria Garcia", status: "interested", time: "12 min ago", score: 88 }
  ];

  useEffect(() => {
    setIsAnimated(true);
    
    // Animate waveform
    const waveInterval = setInterval(() => {
      setWaveform(prev => prev.map(() => Math.random() * 100));
    }, 100);

    // Cycle through call data
    const callInterval = setInterval(() => {
      setCurrentCall(prev => (prev + 1) % callData.length);
    }, 5000);

    // Animate call progress
    const progressInterval = setInterval(() => {
      setCallProgress(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(waveInterval);
      clearInterval(callInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const getSentimentColor = (sentiment: string) => {
    switch(sentiment) {
      case 'Very Positive': return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
      case 'Positive': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Neutral': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Negative': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Hot Lead': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'Qualified': return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
      case 'Follow-up': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getCallStatusColor = (status: string) => {
    switch(status) {
      case 'converted': return 'text-green-400 bg-green-500/20';
      case 'interested': return 'text-emerald-400 bg-emerald-500/20';
      case 'callback': return 'text-yellow-400 bg-yellow-500/20';
      case 'not-interested': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        

        {/* Hero Content */}
        <div className="text-center mb-16 mt-24 md:mt-32 lg:mt-40">
          <div className={`transition-all duration-1000 delay-200 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 pb-6 ">
                Voice Intelligence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your sales outreach with intelligent telecalling that understands, adapts, and converts at scale
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-400 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 flex items-center justify-center gap-2">
              <Volume2 className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Dashboard Section */}
        <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-600 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Dashboard Header */}
          <div className="bg-black/90 backdrop-blur-xl rounded-t-2xl p-6 border border-gray-800/90 border-b-0 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                  <span className="text-white font-semibold ml-4">AI Campaign Dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/50"></div>
                    <span className="text-sm font-medium">Live</span>
                  </div>
                  <div className="text-sm text-gray-400">{new Date().toLocaleDateString()}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="bg-black/90 backdrop-blur-xl rounded-b-2xl border border-gray-800/90 shadow-2xl overflow-hidden ring-2 ring-gray-700/40 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10">
            {/* Metrics Cards */}
            <div className="p-6 border-b border-gray-800/80 bg-black">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {dashboardMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="bg-black/70 backdrop-blur-lg rounded-xl p-4 border-2 border-gray-700/60 hover:border-gray-600/60 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:bg-black/80 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${metric.color} bg-opacity-30 backdrop-blur-sm shadow-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-xs text-emerald-400 font-medium">{metric.change}</div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-300">{metric.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-black">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Live Call Section */}
                <div className="lg:col-span-2 bg-black/80 backdrop-blur-xl rounded-xl p-6 border-2 border-gray-700/60 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        Live Call Analysis
                      </h3>
                      <div className="flex items-center gap-2">
                        <Mic className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{callData[currentCall].duration}</span>
                      </div>
                    </div>

                  {/* Caller Info */}
                  <div className="bg-black/70 backdrop-blur-lg rounded-lg p-4 mb-4 border border-gray-700/50 shadow-md hover:border-gray-600/60 transition-all relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">
                          {callData[currentCall].avatar}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{callData[currentCall].name}</div>
                          <div className="text-gray-300 text-sm">{callData[currentCall].company}</div>
                          <div className="text-gray-400 text-xs">{callData[currentCall].phone}</div>
                        </div>
                      </div>
                    
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getSentimentColor(callData[currentCall].sentiment)}`}>
                          {callData[currentCall].sentiment}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getStatusColor(callData[currentCall].status)}`}>
                          {callData[currentCall].status}
                        </span>
                        {callData[currentCall].tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-300 text-xs rounded-full border border-gray-700/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Waveform Visualization */}
                  <div className="bg-black/70 backdrop-blur-lg rounded-lg p-4 mb-4 border border-gray-700/50 shadow-md hover:border-gray-600/60 transition-all relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-300">Voice Analysis</span>
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm text-emerald-400">Active</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-1 h-20">
                        {waveform.map((height, index) => (
                          <div
                            key={index}
                            className="w-1 bg-gradient-to-t from-emerald-600 via-green-400 to-emerald-400 rounded-full transition-all duration-100 shadow-sm shadow-emerald-500/20"
                            style={{
                              height: `${Math.max(height * 0.8, 10)}%`,
                              animationDelay: `${index * 20}ms`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Live Transcript */}
                  <div className="bg-black/70 backdrop-blur-lg rounded-lg p-4 mb-4 border border-gray-700/50 shadow-md hover:border-gray-600/60 transition-all relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="text-sm text-gray-300 mb-2">Live Transcript:</div>
                      <div className="text-sm text-white leading-relaxed">
                        "{callData[currentCall].transcript}"
                      </div>
                    </div>
                  </div>

                  {/* Lead Score */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Lead Score</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-black/60 backdrop-blur-sm rounded-full h-2 border border-gray-700/50 shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent pointer-events-none"></div>
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full transition-all duration-1000 shadow-sm shadow-emerald-500/30 relative z-10"
                          style={{ width: `${callData[currentCall].score}%` }}
                        ></div>
                      </div>
                      <span className="text-lg text-white font-bold">{callData[currentCall].score}%</span>
                    </div>
                  </div>
                  </div>
                </div>

                {/* Recent Calls */}
                <div className="bg-black/80 backdrop-blur-xl rounded-xl p-6 border-2 border-gray-700/60 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Recent Calls
                    </h3>
                    <div className="space-y-3">
                      {recentCalls.map((call, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-black/60 backdrop-blur-sm rounded-lg hover:bg-black/80 transition-all border border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-600/60 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent pointer-events-none"></div>
                          <div className="relative z-10">
                            <div className="text-white text-sm font-medium">{call.name}</div>
                            <div className="text-gray-400 text-xs">{call.time}</div>
                          </div>
                          <div className="flex items-center gap-2 relative z-10">
                            <span className={`px-2 py-1 rounded-full text-xs backdrop-blur-sm ${getCallStatusColor(call.status)}`}>
                              {call.status}
                            </span>
                            <span className="text-xs text-gray-400">{call.score}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITelecallingHero;