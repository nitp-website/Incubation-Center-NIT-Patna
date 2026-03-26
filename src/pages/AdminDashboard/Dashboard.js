import { useEffect, useState } from "react";
import api from "../../api/axios";
import { TiDelete } from "react-icons/ti";

function Dashboard() {

  /* ================= NOTICE ================= */

  const [notices, setNotices] = useState([]);
  const [noticeInput, setNoticeInput] = useState("");

  const fetchNotices = async () => {
    const res = await api.get("/notice/");
    setNotices(res.data.notices || []);
  };

  const addNotice = async () => {
    if (!noticeInput.trim()) return;

    await api.post("/notice/", { content: noticeInput });
    setNoticeInput("");
    fetchNotices();
  };

  const deleteNotice = async (id) => {
    if (!window.confirm("Delete notice?")) return;

    await api.delete(`/notice/${id}`);
    fetchNotices();
  };

  /* ================= EVENTS ================= */

  const [events, setEvents] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const [eventInput, setEventInput] = useState({
    title: "",
    date: "",
    description: ""
  });

  const fetchEvents = async () => {
    try {
      const res = await api.get("/event/");
      setEvents(res.data.events || []);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const addEvent = async () => {

    if (!eventInput.title.trim()) {
      alert("Title required");
      return;
    }

    if (!eventInput.description.trim()) {
      alert("Description required");
      return;
    }

    try {
      await api.post("/event/", {
        title: eventInput.title,
        description: eventInput.description,
        date: eventInput.date || null  
      });

      setEventInput({
        title: "",
        date: "",
        description: ""
      });

      fetchEvents();

    } catch (err) {
      console.log(err.response?.data);
      alert("Failed to add event");
    }
  };

  const deleteEvent = async (id) => {
    if (!window.confirm("Delete event?")) return;

    await api.delete(`/event/${id}`);
    fetchEvents();
  };

  /* ================= IDEAS ================= */

  const [ideas, setIdeas] = useState([]);

  const fetchIdeas = async () => {
    const res = await api.get("/ideaMail/");
    console.log(res)
    const ideasArray = Array.isArray(res.data)
      ? res.data
      : res.data.ideaMails || [];

    setIdeas(ideasArray);
  };

  /* ================= UI ================= */

  useEffect(() => {
    fetchNotices();
    fetchEvents();
    fetchIdeas();
  }, []);


  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Admin Dashboard</h1>

      <div style={styles.grid}>

        {/* ================= NOTICE ================= */}
        <div style={styles.card}>
          <h2 style={{fontSize:"20px"}}>Notices</h2>

          <div style={styles.list}>
            {notices.map((n) => (
              <div style={styles.row} key={n.id}>
                <span style={{fontSize:"15px"}}>{n.content}</span>
                <TiDelete onClick={() => deleteNotice(n.id)} />
              </div>
            ))}
          </div>

          <input
            placeholder="Add notice"
            value={noticeInput}
            onChange={(e) => setNoticeInput(e.target.value)}
            style={styles.input}
          />

          <button onClick={addNotice} style={styles.button}>
            Add
          </button>
        </div>

        {/* ================= EVENTS ================= */}
        <div style={styles.card}>
          <h2 style={{fontSize:"20px"}}>Events</h2>

          <div style={styles.list}>
            {events.map((e,index) => (
              <div style={styles.eventCard} key={e.id}>
                
                <div style={styles.row}>
                  <div>
                    <div style={{fontSize:"15px", color:"#0ef"}}>{index+1}. {e.title}</div>
                    <div style={{ fontSize: "12px", marginLeft:"10px",marginTop:"5px" }}>{ e.date ? new Date(e.date).toLocaleDateString('en-CA') : ""}</div>
                  </div>

                  <TiDelete onClick={() => deleteEvent(e.id)} />

                </div>
                <div
                  onClick={() =>
                    setExpanded(expanded === e.id ? null : e.id)
                  }
                  style={{
                    ...styles.desc,
                    whiteSpace:
                      expanded === e.id ? "normal" : "nowrap",
                    marginLeft: "10px",
                    fontSize:"12px"
                  }}
                >
                  {e.description}
                </div>

              </div>
            ))}
          </div>

          <input
            placeholder="Title"
            value={eventInput.title}
            onChange={(e) =>
              setEventInput({ ...eventInput, title: e.target.value })
            }
            style={styles.input}
          />

          <input
            type="date"
            value={eventInput.date}
            onChange={(e) =>
              setEventInput({ ...eventInput, date: e.target.value })
            }
            style={styles.input}
          />

          <input
            placeholder="Description"
            value={eventInput.description}
            onChange={(e) =>
              setEventInput({ ...eventInput, description: e.target.value })
            }
            style={styles.input}
          />

          <button onClick={addEvent} style={styles.button}>
            Add Event
          </button>
        </div>

        {/* ================= IDEAS ================= */}
        <div style={styles.card}>
          <h2 style={{fontSize:"20px"}}>Ideas</h2>

          <div style={styles.list}>
            {ideas.map((i,index) => (
              <div key={i.id} style={styles.ideaCard}>
                <div style={{fontSize:"15px", color:"#0ef"}}>{index+1}. {i.name} : {i.subject}</div>
                <div style={{marginLeft:"20px", fontSize:"12px"}}>{i.createdAt ? new Date(i.createdAt).toLocaleDateString('en-CA') : ""}</div>
                <div style={{marginLeft: "20px", fontSize:"12px"}}>Email-Id: {i.email}</div>
                <div style={{marginLeft: "20px", fontSize:"12px"}}>Contact: {i.phone}</div>
                <div style={{marginLeft: "20px", fontSize:"12px"}}>{i.message}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}


const styles = {
  container: {
    padding: "20px",
    background: "#0b1a2f",
    minHeight: "100vh",
    color: "white"
  },

  title: {
    textAlign: "center",
    marginBottom: "20px"
  },

  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center"
  },

  card: {
    width: "320px",
    background: "rgba(255,255,255,0.08)",
    padding: "15px",
    borderRadius: "10px"
  },

  list: {
    maxHeight: "200px",
    overflowY: "auto",
    marginBottom: "10px"
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px"
  },

  input: {
    width: "100%",
    marginTop: "5px",
    padding: "8px",
    borderRadius: "5px",
    border: "none"
  },

  button: {
    marginTop: "8px",
    padding: "10px",
    width: "100%",
    background: "#00e0ff",
    border: "none",
    cursor: "pointer"
  },

  eventCard: {
    marginBottom: "10px"
  },

  desc: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    cursor: "pointer"
  },

  ideaCard: {
    marginBottom: "10px",
  }
};

export default Dashboard;