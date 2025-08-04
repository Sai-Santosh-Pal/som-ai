// "use client";

// import { useState, useRef, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';

// export default function Chat() {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([]);
//   const chatEndRef = useRef(null);

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const contextData = `
// ### 🚀 Getting Started

// **How does it work?**
// Watch this video: [https://vimeo.com/1093563882/3f9f9c02e1](https://vimeo.com/1093563882/3f9f9c02e1)
// You must verify your ID. Until then, you're a “multi-channel guest.” Use the DM from @Summer of Making to log in.

// **“Not authorized to install \_\_\_” error?**
// Verify your ID to gain full access.

// **Earning Prizes**
// Publish projects → enter matchups → earn shells based on votes.

// **Tracking Time**
// Use Hackatime + WakaTime extension.

// **Sign In Again?**
// Re-enter your email → check for magic link in your inbox.

// **Suggest Prizes**
// Submit ideas: [https://forms.hackclub.com/t/3q9AhhHkwsus](https://forms.hackclub.com/t/3q9AhhHkwsus)

// ---

// ### 🚢 Projects

// **Commit Frequency**
// No strict rule—after each feature is ideal.

// **Hardware Projects?**
// Yes, use Hackatime-supported tools (e.g. KiCad). Join #highway for grants.
// ⚠️ Can’t submit the same project to both Highway & Summer of Making.

// **Old Projects?**
// Only work after June 16 counts.

// **Team Projects?**
// Yes, use same repo & play links. Each member must commit individually (no Liveshare).

// **Time Mismatch?**
// Hackatime syncs slowly—don’t worry if IDE time differs.

// **YSWS Projects?**
// Allowed unless it's for:
// \#highway, #neighborhood, #shipwrecked, #jumpstart, #gemini

// **Devlogs**
// Log your progress like a journal. Required: 1 devlog per 10 hours. Optional for <10 hours.
// Why? Helps verify your work & shows your growth.
// Details: [https://hackclub.slack.com/archives/C015M4L9AHW/p1750612669390289](https://hackclub.slack.com/archives/C015M4L9AHW/p1750612669390289)

// **Verification Time?**
// Manual review takes time, especially on weekends. You can start a new project while waiting.

// ---

// ### 🛂 Verification

// **Who Can Join?**
// Anyone 18 or under.

// **Why Trust Hack Club?**
// Partners include SpaceX, MIT, GitHub, GWC, and more. Transparent 501(c)(3) nonprofit.

// **Why Verify?**
// To prevent fraud—only youth get the rewards.

// **Re-verification?**
// Required even if previously verified. L2 status carries over.

// **How to Verify?**
// Order stickers on Campfire. You'll be guided by raccoon bot Heidi 🦝

// **Accepted ID**

// * 🇮🇳 India: Aadhaar (unmasked PDF from UIDAI)
// * 🌍 Other: Gov-issued ID or school ID + report card

// **Rejected Verification?**
// You'll get an email to re-submit.

// **Can’t do XYZ despite being verified?**
// Open [summer.hackclub.com](https://summer.hackclub.com) to trigger account upgrade.

// **Link Identity & SoM manually:**

// 1. Go to stickers → click "acquire"
// 2. Sign in at identity.hackclub.com
// 3. Click magic link from your email
// 4. Link accounts → order stickers 🎉

// **Unverified Login?**
// Use the special link sent by @Summer of Making.

// ---

// ### 💬 Help & Issues

// **Banned?**
// Email:  echo@hackclub.com 

// **More Questions?**
// Ask in  #summer-of-making-help  or  #summer-of-making-questions 
// `;

//     const newMessages = [...messages, { role: 'user', content: input }];
//     setMessages(newMessages); // ✅ keep messages as an array of objects
//     setInput('');
//         setInput('');

    

//     const res = await fetch('/api/chat', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//       messages: [
//         ...newMessages,  // assuming this is an array of { role, content }
//         {
//           role: 'system',  // or 'user', if it's meant to be user-provided
//           content:  `This is some data, answer based on this - ${contextData}`
//         }
//       ]
//     })
//     });

//     const data = await res.json();
//     console.log('AI response:', data);
//     const reply = data.choices?.[0]?.message;
//     setMessages([...newMessages, reply || { role: 'assistant', content: 'Error' }]);
//   };

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <div className="max-w-xl mx-auto h-screen flex flex-col bg-[#0f0f0f] text-white">
//       <div className="flex-1 overflow-y-auto p-4 space-y-3">
//         {messages.map((m, i) => (
//           <div
//             key={i}
//             className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
//           >
//             <div
//               className={`max-w-md whitespace-pre-wrap break-words p-4 rounded-xl shadow-lg ${
//                 m.role === 'user'
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-gray-800 text-gray-100'
//               }` }
//             >
//               <ReactMarkdown
//                 components={{
//                   think: ({ node, children }) => (
//                     <div className="italic text-gray-400 border-l-4 border-gray-600 pl-3 my-2">
//                       {children}
//                     </div>
//                   ),
//                   a: ({ node, ...props }) => (
//                     <a {...props} className="text-blue-400 underline" />
//                   ),
//                   strong: ({ node, ...props }) => (
//                     <strong className="text-white font-semibold" {...props} />
//                   ),
//                   li: ({ node, ...props }) => (
//                     <li className="list-disc ml-5 mb-1" {...props} />
//                   ),
//                 }}
//               >
//                 {m.content.replace(/<think>/g, '\n<think>').replace(/<\/think>/g, '</think>\n')}
//               </ReactMarkdown>
//             </div>
//           </div>
//         ))}
//         <div ref={chatEndRef} />
//       </div>
//       <form
//         onSubmit={sendMessage}
//         className="flex p-4 border-t border-gray-700 bg-[#1a1a1a]"
//       >
//         <input
//           type="text"
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           className="flex-1 bg-[#2b2b2b] text-white border border-gray-600 rounded-l px-4 py-2 focus:outline-none"
//           placeholder="Type your message..."
//         />
//         <button
//           type="submit"
//           className="bg-blue-700 text-white px-4 py-2 rounded-r hover:bg-blue-800"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }


// function StyledContent({ content }) {
//   // Replace <think>...</think> blocks with styled JSX elements
//   const parts = [];
//   const regex = /<think>([\s\S]*?)<\/think>/gi;
//   let lastIndex = 0;
//   let match;

//   while ((match = regex.exec(content)) !== null) {
//     // Push text before <think>
//     if (match.index > lastIndex) {
//       parts.push(content.slice(lastIndex, match.index));
//     }
//     // Push styled <think> block
//     parts.push(
//       <div key={match.index} style={{
//         backgroundColor: '#f0f4ff',
//         borderLeft: '4px solid #3b82f6',
//         padding: '12px 16px',
//         fontFamily: 'monospace',
//         whiteSpace: 'pre-wrap',
//         color: '#1e40af',
//         borderRadius: '4px',
//         margin: '12px 0'
//       }}>
//         &lt;think&gt;
//         <br />
//         {match[1].trim()}
//         <br />
//         &lt;/think&gt;
//       </div>
//     );
//     lastIndex = regex.lastIndex;
//   }
//   // Push remaining text after last match
//   if (lastIndex < content.length) {
//     parts.push(content.slice(lastIndex));
//   }

//   return <>{parts}</>;
// }

"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function renderContent(content) {
  const regex = /<think>([\s\S]*?)<\/think>/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    parts.push(
      <div
        key={match.index}
        className="italic text-gray-400 border-l-4 border-gray-600 pl-3 my-2 whitespace-pre-wrap"
      >
        {match[1].trim()}
      </div>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }
  return parts;
}


export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  const contextData = `
### 🚀 Getting Started

**How does it work?**  
Watch this video: [https://vimeo.com/1093563882/3f9f9c02e1](https://vimeo.com/1093563882/3f9f9c02e1)  
You must verify your ID. Until then, you're a “multi-channel guest.” Use the DM from @Summer of Making to log in.

**“Not authorized to install ___” error?**  
Verify your ID to gain full access.

**Earning Prizes**  
Publish projects → enter matchups → earn shells based on votes.

**Tracking Time**  
Use Hackatime + WakaTime extension.

**Sign In Again?**  
Re-enter your email → check for magic link in your inbox.

**Suggest Prizes**  
Submit ideas: [https://forms.hackclub.com/t/3q9AhhHkwsus](https://forms.hackclub.com/t/3q9AhhHkwsus)

---

### 🚢 Projects

**Commit Frequency**  
No strict rule—after each feature is ideal.

**Hardware Projects?**  
Yes, use Hackatime-supported tools (e.g. KiCad). Join #highway for grants.  
⚠️ Can’t submit the same project to both Highway & Summer of Making.

**Old Projects?**  
Only work after June 16 counts.

**Team Projects?**  
Yes, use same repo & play links. Each member must commit individually (no Liveshare).

**Time Mismatch?**  
Hackatime syncs slowly—don’t worry if IDE time differs.

**YSWS Projects?**  
Allowed unless it's for:  
#highway, #neighborhood, #shipwrecked, #jumpstart, #gemini

**Devlogs**  
Log your progress like a journal. Required: 1 devlog per 10 hours. Optional for <10 hours.  
Why? Helps verify your work & shows your growth.  
Details: [https://hackclub.slack.com/archives/C015M4L9AHW/p1750612669390289](https://hackclub.slack.com/archives/C015M4L9AHW/p1750612669390289)

**Verification Time?**  
Manual review takes time, especially on weekends. You can start a new project while waiting.

---

### 🛂 Verification

**Who Can Join?**  
Anyone 18 or under.

**Why Trust Hack Club?**  
Partners include SpaceX, MIT, GitHub, GWC, and more. Transparent 501(c)(3) nonprofit.

**Why Verify?**  
To prevent fraud—only youth get the rewards.

**Re-verification?**  
Required even if previously verified. L2 status carries over.

**How to Verify?**  
Order stickers on Campfire. You'll be guided by raccoon bot Heidi 🦝

**Accepted ID**

* 🇮🇳 India: Aadhaar (unmasked PDF from UIDAI)  
* 🌍 Other: Gov-issued ID or school ID + report card

**Rejected Verification?**  
You'll get an email to re-submit.

**Can’t do XYZ despite being verified?**  
Open [summer.hackclub.com](https://summer.hackclub.com) to trigger account upgrade.

**Link Identity & SoM manually:**

1. Go to stickers → click "acquire"  
2. Sign in at identity.hackclub.com  
3. Click magic link from your email  
4. Link accounts → order stickers 🎉

**Unverified Login?**  
Use the special link sent by @Summer of Making.

---

### 💬 Help & Issues

**Banned?**  
Email: echo@hackclub.com

**More Questions?**  
Ask in #summer-of-making-help or #summer-of-making-questions
`;

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          ...newMessages,
          {
            role: "system",
            content: `This is some data, answer based on this - ${contextData}`,
          },
        ],
      }),
    });

    const data = await res.json();
    const reply = data.choices?.[0]?.message;
    setMessages([...newMessages, reply || { role: "assistant", content: "Error" }]);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-xl mx-auto h-screen flex flex-col bg-[#0f0f0f] text-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
  <div
    key={i}
    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
  >
    <div
      className={`max-w-md whitespace-pre-wrap break-words p-4 rounded-xl shadow-lg ${
        m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100"
      }`}
    >
      {renderContent(m.content).map((part, idx) =>
        typeof part === "string" ? (
          <ReactMarkdown key={idx} components={{
            a: ({ node, ...props }) => (
              <a {...props} className="text-blue-400 underline" />
            ),
            strong: ({ node, ...props }) => (
              <strong className="text-white font-semibold" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="list-disc ml-5 mb-1" {...props} />
            ),
          }}>
            {part}
          </ReactMarkdown>
        ) : (
          part
        )
      )}
    </div>
  </div>
))}

        <div ref={chatEndRef} />
      </div>
      <form
        onSubmit={sendMessage}
        className="flex p-4 border-t border-gray-700 bg-[#1a1a1a]"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-[#2b2b2b] text-white border border-gray-600 rounded-l px-4 py-2 focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded-r hover:bg-blue-800"
        >
          Send
        </button>
      </form>
    </div>
  );
}
