**Linking Domain to IP:**
```javascript
link('google.com', '172.0.0.1');
// Result: domains -> [
//   {
//     name: 'com',
//     domains: [
//       {
//         name: 'google',
//         ip: '172.0.0.1'
//       }
//     ]
//   }
// ];

```

**Linking Subdomains to IPs:**
```javascript
link('mail.google.com', '172.0.0.2');
link('chat.google.com', '172.0.0.3');
// Result: domains -> [
//   {
//     name: 'com',
//     domains: [
//       {
//         name: 'google',
//         domains: [
//           {
//             name: 'mail',
//             ip: '172.0.0.2'
//           },
//           {
//             name: 'chat',
//             ip: '172.0.0.3'
//           }
//         ]
//       }
//     ]
//   }
// ];

```

**Resolving IP Addresses:**
```javascript
console.log(resolve('google.com'));         // Output: 172.0.0.1
console.log(resolve('mail.google.com'));    // Output: 172.0.0.2
console.log(resolve('chat.google.com'));    // Output: 172.0.0.3
```
