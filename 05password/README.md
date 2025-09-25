# Password Generator

This project is a **React + Vite** application that generates secure and customizable passwords.  
It allows users to define password length and choose whether to include **numbers** and **special characters**.

### Key Features
- **Dynamic Password Length**: Adjust password length using a slider (6–100 characters).
- **Customizable Options**: Toggle inclusion of **numbers** and **special symbols**.
- **Copy to Clipboard**: Quickly copy the generated password with a single click.
- **Real-Time Updates**: Password automatically regenerates when settings change.

### Key Learnings
- Using **`useState`** to manage input states and password value.
- Applying **`useCallback`** to memoize the password generator function.
- Utilizing **`useEffect`** to trigger password regeneration on state changes.
- Handling **clipboard operations** and using **`useRef`** to interact with input fields.

This project strengthens understanding of **React hooks**, state management, and creating interactive utilities.
