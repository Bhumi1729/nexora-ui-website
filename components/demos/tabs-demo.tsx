"use client"

import { useState } from 'react'

export default function TabsDemo() {
  const [activeTab, setActiveTab] = useState('account')

  return (
    <div className="w-[400px]">
      <div className="flex border-b">
        <button 
          className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
            activeTab === 'account' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('account')}
        >
          Account
          {activeTab === 'account' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in slide-in-from-left-4 duration-200" />
          )}
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
            activeTab === 'password' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('password')}
        >
          Password
          {activeTab === 'password' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in slide-in-from-left-4 duration-200" />
          )}
        </button>
      </div>
      <div className="p-4 text-sm animate-in fade-in-0 duration-200">
        {activeTab === 'account' && (
          <div>Account settings and preferences.</div>
        )}
        {activeTab === 'password' && (
          <div>Change your password and security settings.</div>
        )}
      </div>
    </div>
  )
}
