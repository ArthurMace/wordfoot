/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: linear-gradient(120deg, #004d00, #008000);
  color: #fff;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

#menu-principal button {
  background: #004d00;
  color: #fff;
  border: 2px solid #008000;
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
}

#menu-principal button:hover {
  background: #006600;
  transform: scale(1.05);
}

footer {
  margin-top: 20px;
  font-size: 0.9rem;
}
