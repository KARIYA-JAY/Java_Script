## React fiber 
- it is use for update dom in some action like below
    - pause the work and come back it later 
    - assign priority to any work 
    - reuse previous element 
    - abort work it not need . 

-  reconciliation  is virtual dom 
    - it use diffing algo for dom manipulation .

# Tailwindcss install command
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p 

@tailwind base;
@tailwind components;
@tailwind utilities;

- import in config file component 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"