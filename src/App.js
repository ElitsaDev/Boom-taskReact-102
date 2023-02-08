import "./App.css";
import { motion } from "framer-motion/dist/framer-motion"

function App() {

  return (
    <div className="App">
      <motion.div
       animate={{ x: 1000 }}
       transition={{
        repeat: 1,
        repeatType: "reverse",
        duration: 2
      }}
      >
      <form>     
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </form>
    </motion.div>  
    </div>
  );
}

export default App;
