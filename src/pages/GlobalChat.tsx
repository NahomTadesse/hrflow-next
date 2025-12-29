"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Users,
  Clock,
  Briefcase,
  Calendar,
  FileText,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

const quickReplies = [
  "How do I apply for leave?",
  "Where can I check my payslip?",
  "I need to update my personal details",
  "How to request a training?",
  "Report a technical issue",
  "Check my attendance record",
  "Request equipment",
  "View company policies",
  "Schedule performance review",
  "Submit expense report",
];

export default function GlobalChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to HR ERP System.\nI'm your HR Assistant. How can I help you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: messages.length + 1,
      text,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const botResponses: Record<string, string> = {
        "How do I apply for leave?":
          "Go to Leave Management → Apply Leave. Select type, dates, and submit. Approval takes 24-48 hours.",
        "Where can I check my payslip?":
          "Payslips are available in Payroll → My Payslips. Generated on the 5th of each month.",
        "I need to update my personal details":
          "Update info in Employee Profile → Personal Details. You can also add emergency contacts there.",
        "How to request a training?":
          "Submit requests in Training → Request Training. Include course details and justification.",
        "Report a technical issue":
          "Submit IT tickets through the IT Portal. Urgent? Call helpdesk at ext. 555.",
        "Check my attendance record":
          "View records in Attendance → My Records. Discrepancies? Contact your manager.",
        "Request equipment":
          "Requests go through Assets → Request Equipment. IT items require IT approval.",
        "View company policies":
          "All policies in Documents → Company Policies. Latest updates highlighted.",
        "Schedule performance review":
          "Schedule in Performance → My Reviews. Quarterly reviews are mandatory.",
        "Submit expense report":
          "Submit in Finance → Expense Claims. Keep receipts under $50, invoices above.",
      };

      const defaultResponses = [
        "I've forwarded your query to HR. They'll respond within 24 hours.",
        "You can find this in the Employee Self-Service portal.",
        "Please check the HR handbook for detailed procedures.",
        "For urgent matters, email hr@company.com.",
        "This requires manager approval first. Please discuss with your supervisor.",
      ];

      const reply =
        botResponses[text] ||
        defaultResponses[Math.floor(Math.random() * defaultResponses.length)];

      const botMsg: Message = {
        id: messages.length + 2,
        text: reply,
        sender: "bot",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);

    setInput("");

    if (isMobile) {
      setShowQuickReplies(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[9999] flex items-center justify-center text-white transition-all duration-300 group bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-2xl hover:scale-110"
        style={{
          width: isMobile ? "56px" : "64px",
          height: isMobile ? "56px" : "64px",
          bottom: isMobile ? "16px" : "32px",
          right: isMobile ? "16px" : "32px",
        }}
        aria-label="Open HR Assistant"
      >
        {isOpen ? (
          <X className={isMobile ? "w-6 h-6" : "w-8 h-8"} />
        ) : (
          <>
            <MessageCircle className={isMobile ? "w-6 h-6" : "w-8 h-8"} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-ping"></span>
          </>
        )}
      </button>

      {/* Chat Window - Increased height on desktop */}
      {isOpen && (
        <div
          className="fixed z-[9998] flex flex-col overflow-hidden bg-white border border-gray-200 shadow-2xl dark:bg-gray-900 dark:border-gray-800"
          style={{
            width: isMobile ? "calc(100vw - 32px)" : "24rem",
            height: isMobile ? "calc(100vh - 120px)" : "720px", // Increased from 620px to 720px
            maxHeight: isMobile ? "calc(100vh - 120px)" : "80vh", // Allows even taller on very large screens
            bottom: isMobile ? "80px" : "112px",
            right: isMobile ? "16px" : "32px",
            left: isMobile ? "16px" : "auto",
            borderRadius: isMobile ? "20px" : "24px",
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/25 rounded-full sm:w-12 sm:h-12">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">HR Assistant</h3>
                  <div className="flex items-center gap-2 text-xs opacity-90 sm:text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Online • Mon-Fri, 9AM-6PM</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isMobile && (
                  <button
                    onClick={() => setShowQuickReplies(!showQuickReplies)}
                    className="p-2 transition rounded-lg hover:bg-white/20"
                    aria-label="Toggle quick replies"
                  >
                    {showQuickReplies ? (
                      <ChevronRight className="w-5 h-5" />
                    ) : (
                      <ChevronLeft className="w-5 h-5" />
                    )}
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 transition rounded-lg hover:bg-white/20"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-between px-4 py-2 text-xs border-b border-gray-200 bg-blue-50 dark:bg-gray-800 dark:border-gray-700 sm:px-5 sm:py-3 sm:text-sm">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Avg. response: 2 min</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>HR Team Online</span>
            </div>
          </div>

          {/* Messages - Now with more vertical space */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900 sm:p-6 sm:space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-xs px-4 py-3 rounded-2xl shadow-sm sm:px-5 sm:py-4 ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none"
                      : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {msg.sender === "bot" && !isMobile && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                      </div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
                        HR Assistant
                      </span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed whitespace-pre-wrap sm:text-sm">
                    {msg.text}
                  </p>
                  <p
                    className={`text-xs mt-2 ${
                      msg.sender === "user"
                        ? "text-blue-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {(showQuickReplies || !isMobile) && (
            <div className="p-4 border-t border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
              <h4 className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <AlertCircle className="w-4 h-4" />
                Quick HR Actions
              </h4>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {quickReplies.slice(0, isMobile ? 4 : 6).map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(reply)}
                    className="px-3 py-2 text-xs transition-all border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-gray-600 dark:hover:to-gray-700 border-blue-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:scale-[1.02] sm:text-xs"
                  >
                    <span className="line-clamp-1 text-left">{reply}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 sm:p-5">
            <div className="flex items-center gap-2 sm:gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask about leave, payroll, training..."
                className="flex-1 px-4 py-3 text-sm transition bg-white border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:px-5 sm:text-base"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className={`px-4 py-3 font-medium transition-all rounded-full sm:px-5 ${
                  input.trim()
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 shadow-lg"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-xs text-gray-500 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                  <Calendar className="w-4 h-4" />
                  {!isMobile && <span>Leave</span>}
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                  <FileText className="w-4 h-4" />
                  {!isMobile && <span>Payslip</span>}
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                  <TrendingUp className="w-4 h-4" />
                  {!isMobile && <span>Performance</span>}
                </button>
              </div>
              {!isMobile && (
                <span className="text-xs">Press Enter to send</span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
