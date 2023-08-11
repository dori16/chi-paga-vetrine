import React, { useState } from 'react';

function App() {
  const allUsers = ["Doriano", "Antonio", "Marco", "Andrea", "Alessandro"];
  const [presentUsers, setPresentUsers] = useState(allUsers);
  const [lastPaid, setLastPaid] = useState("");

  const handleWhoPays = () => {
    const nextUser = getNextUser(presentUsers, lastPaid);
    setLastPaid(nextUser);
  };

  const getNextUser = (users, lastPaid) => {
    const currentIndex = lastPaid ? users.indexOf(lastPaid) : -1;
    const nextIndex = (currentIndex + 1) % users.length;
    return users[nextIndex];
  }

  const togglePresence = (user) => {
    if (presentUsers.includes(user)) {
      setPresentUsers(prevUsers => prevUsers.filter(u => u !== user));
    } else {
      setPresentUsers(prevUsers => [...prevUsers, user]);
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200 p-5">
      <h1 className="mb-5 text-3xl">Chi paga il caffè?</h1>
      <div className="mb-4">
        <h2 className="mb-2 text-xl">Chi è presente oggi?</h2>
        {allUsers.map(user => (
          <div key={user} className="mb-1">
            <input 
              type="checkbox"
              id={user}
              checked={presentUsers.includes(user)}
              onChange={() => togglePresence(user)}
            />
            <label htmlFor={user} className="ml-2">{user}</label>
          </div>
        ))}
      </div>
      <button onClick={handleWhoPays} className="mb-5 px-4 py-2  bg-blue-500 text- rounded">
        Scopri chi paga!
      </button>
      {lastPaid && <p className="text-xl">{lastPaid} paga il caffè oggi!</p>}
    </div>
  );
}

export default App;
