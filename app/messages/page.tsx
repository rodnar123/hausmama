"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send, Search } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"

type Message = {
  id: string
  senderId: string
  content: string
  timestamp: Date
  read: boolean
}

type Conversation = {
  id: string
  providerId: string
  providerName: string
  lastMessage: string
  lastMessageTime: Date
  unread: number
}

// Mock data
const mockConversations: Conversation[] = [
  {
    id: "1",
    providerId: "1",
    providerName: "Mary Kila",
    lastMessage: "I'm available for the dates you mentioned",
    lastMessageTime: new Date("2024-11-15T14:30:00"),
    unread: 2
  },
  {
    id: "2",
    providerId: "2",
    providerName: "John Tau",
    lastMessage: "Thank you for your interest!",
    lastMessageTime: new Date("2024-11-14T10:15:00"),
    unread: 0
  }
]

const mockMessages: Message[] = [
  {
    id: "1",
    senderId: "provider",
    content: "Hello! Thank you for reaching out. How can I help you?",
    timestamp: new Date("2024-11-15T10:00:00"),
    read: true
  },
  {
    id: "2",
    senderId: "user",
    content: "Hi! I'm looking for childcare services for next week. Are you available?",
    timestamp: new Date("2024-11-15T10:05:00"),
    read: true
  },
  {
    id: "3",
    senderId: "provider",
    content: "Yes, I'm available! What days and times were you thinking?",
    timestamp: new Date("2024-11-15T10:10:00"),
    read: true
  }
]

function MessagesContent() {
  const searchParams = useSearchParams()
  const providerId = searchParams.get("provider")
  
  const [conversations] = useState(mockConversations)
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState("")
  const [selectedConversation, setSelectedConversation] = useState(
    providerId ? mockConversations[0]?.id : null
  )
  const [searchQuery, setSearchQuery] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      senderId: "user",
      content: newMessage,
      timestamp: new Date(),
      read: false
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  const filteredConversations = conversations.filter(conv =>
    conv.providerName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Messages</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search conversations..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {filteredConversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                      selectedConversation === conv.id ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold">{conv.providerName}</p>
                      {conv.unread > 0 && (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {conv.lastMessageTime.toLocaleDateString()}
                    </p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Message Thread */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>
                {selectedConversation
                  ? conversations.find(c => c.id === selectedConversation)?.providerName
                  : "Select a conversation"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedConversation ? (
                <div className="space-y-4">
                  {/* Messages */}
                  <div className="h-96 overflow-y-auto space-y-4 p-4 bg-gray-50 rounded-lg">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.senderId === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-xs px-4 py-2 rounded-lg ${
                            message.senderId === "user"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-900 border"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.senderId === "user"
                                ? "text-blue-100"
                                : "text-gray-500"
                            }`}
                          >
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage()
                        }
                      }}
                    />
                    <Button onClick={handleSendMessage}>
                      <Send size={18} />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="h-96 flex items-center justify-center text-gray-500">
                  Select a conversation to start messaging
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function MessagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">Loading messages...</div>}>
      <MessagesContent />
    </Suspense>
  )
}
