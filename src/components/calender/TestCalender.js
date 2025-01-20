import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import "./custom-calendar.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEvents = [
  {
    id: 1,
    title: "Meeting",
    allDay: true,
    start: new Date(2025, 0, 22),
    end: new Date(2025, 0, 22),
    icon: <GroupAddIcon />,
  },
];

function TestCalendar() {
  const [events, setEvents] = useState(initialEvents);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectSlot = ({ start }) => {
    const startOfDay = new Date(start);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(start);
    endOfDay.setHours(23, 59, 59, 999);

    const filteredEvents = events.filter(
      (event) =>
        new Date(event.start) >= startOfDay && new Date(event.start) <= endOfDay
    );

    setSelectedEvent({
      id: null,
      title: "",
      start: startOfDay,
      end: endOfDay,
      filteredEvents: filteredEvents,
    });

    setOpenDialog(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedEvent(null);
  };

  const handleAddEvent = () => {
    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    setSelectedEvent({
      id: null,
      title: "",
      start: startOfDay,
      end: endOfDay,
    });
    setOpenDialog(true);
  };

  const handleSaveEvent = () => {
    if (selectedEvent.id) {
      setEvents((prev) =>
        prev.map((evt) => (evt.id === selectedEvent.id ? selectedEvent : evt))
      );
    } else {
      setEvents((prev) => [
        ...prev,
        { ...selectedEvent, id: prev.length + 1, icon: <GroupAddIcon /> },
      ]);
    }
    setOpenDialog(false);
  };

  const eventStyleGetter = () => {
    return {
      style: {
        backgroundColor: "#ff0",
        borderRadius: "5px",
        color: "black",
        padding: "5px",
      },
    };
  };

  const Event = ({ event }) => (
    <div>
      {event.icon}
      <span>{event.title}</span>
    </div>
  );

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        components={{
          event: Event,
        }}
        eventPropGetter={eventStyleGetter}
      />

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogContent>
          <div style={{ marginTop: 20 }}>
            <h4>รายการอีเวนต์</h4>
            <div>
              {events.map((event) => (
                <div
                  key={event.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      style={{ marginRight: 10 }}
                      onChange={() =>
                        console.log("Checkbox clicked:", event.id)
                      }
                    />
                    <span>
                      {event.title} -{" "}
                      {new Date(event.start).toLocaleTimeString()} ถึง{" "}
                      {new Date(event.end).toLocaleTimeString()}
                    </span>
                  </div>
                  <div>
                    <Button
                      variant="text"
                      color="primary"
                      onClick={() => handleSelectEvent(event)}
                    >
                      แก้ไข
                    </Button>
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() =>
                        setEvents((prev) =>
                          prev.filter((e) => e.id !== event.id)
                        )
                      }
                    >
                      ลบ
                    </Button>
                  </div>
                </div>
              ))}
              <div>
                <Button
                  startIcon={<AddCircleIcon />}
                  onClick={handleAddEvent}
                >
                    เพิ่มสมาชิกใหม่
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            ยกเลิก
          </Button>
          <Button onClick={handleSaveEvent} color="primary">
            บันทึก
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TestCalendar;
