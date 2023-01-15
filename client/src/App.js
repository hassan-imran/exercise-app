import { Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import ErrorPage from "./routes/ErrorPage";
import ActivityForm from "./routes/ActivityForm";
import ActivityDashboard from "./components/ActivityDashboard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [activities, setActivities] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => axios.get('http://localhost:3000/api/tracking/').then((res) => {
    setActivities(res.data);
    setUpdateFlag(false);
  })
    .catch((e) => {
      console.log(e.message)
    });

  useEffect(() => {
    fetchData();
  }, [updateFlag])

  // console.log(activities);

  return (
    <div className="App" style={{ backgroundColor: "#EDEDED" }}>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-reset text-decoration-none">
              Exercise Tracker
            </Link>
          </Navbar.Brand>

          <Nav className="me-auto">

            <Nav.Link>
              <Link to="/add" className="text-reset text-decoration-none">
                Add Activity
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/dashboard" className="text-reset text-decoration-none">
                Dashboard
              </Link>
            </Nav.Link>

          </Nav>


        </Container>
      </Navbar>

      <br />

      <Routes>
        <Route path="/" element={
          <ActivityDashboard activities={activities} setActivities={setActivities} error={error} setError={setError} />
        } />
        <Route path="/add" element={
          <ActivityForm setUpdateFlag={setUpdateFlag} error={error} setError={setError} />
        } />
        <Route path="/dashboard" element={
          <ActivityDashboard activities={activities} setActivities={setActivities} setUpdateFlag={setUpdateFlag} error={error} setError={setError}/>
        } />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


    </div>
  );
}

export default App;
