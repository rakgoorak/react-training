import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';  // ใช้ L สำหรับ icon
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import 'leaflet/dist/leaflet.css';

const MapEventHandler = ({ setMarkerPosition, setShowDialog, setMarkerLatLng }) => {
  const longPressDuration = 1000;  // กำหนดระยะเวลาเป็น 1000ms (1 วินาที)
  
  const handleMapClick = (e) => {
    let clickTimer = 0;  // เพิ่มตัวจับเวลาสำหรับคลิก
    clickTimer = setTimeout(() => {
      setMarkerPosition(e.latlng);  // เมื่อครบเวลา 1 วินาที ตั้งตำแหน่ง Marker
      setMarkerLatLng(e.latlng);  // เก็บตำแหน่งที่กดค้าง
      setShowDialog(true);  // แสดง dialog เพื่อกรอกข้อมูล
    }, longPressDuration);
  };

  useMapEvents({
    contextmenu: handleMapClick,  // เพิ่มการจัดการ event click
  });

  return null;
};

const MyMap = () => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [markerLatLng, setMarkerLatLng] = useState(null);
  const [markerInfo, setMarkerInfo] = useState('');
  const [currentLocation, setCurrentLocation] = useState([51.505, -0.09]);  // Default location

  // สร้าง icon ด้วย HTML หรือ CSS
  const customIcon = new L.DivIcon({
    className: 'custom-icon',  // class สำหรับ CSS
    html: '<div class="icon-container">⭐</div>', // ใช้ Emoji หรือ HTML
    iconSize: [40, 40],  // ขนาดของ icon
    iconAnchor: [20, 40],  // ตั้ง anchor ให้ถูกต้อง
  });

  // ใช้ useEffect เพื่อดึงตำแหน่งปัจจุบันของผู้ใช้
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);  // ตั้งค่า current location
        },
        () => {
          console.error("Geolocation is not available or permission denied.");
        }
      );
    }
  }, []);

  const handleDialogClose = () => {
    setShowDialog(false);  // ปิด dialog
  };

  const handleInputChange = (e) => {
    setMarkerInfo(e.target.value);  // เก็บข้อมูลที่กรอก
  };

  const handleSubmit = () => {
    // เมื่อกด Submit จะเก็บข้อมูลที่กรอกใน Popup ของ Marker
    setShowDialog(false);
  };

  return (
    <div>
      <MapContainer center={currentLocation} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markerPosition && (
          <Marker position={markerPosition} icon={customIcon}> {/* ใช้ customIcon */}
            <Popup>
              Marker placed at {markerPosition.lat}, {markerPosition.lng} <br />
              {markerInfo ? markerInfo : "No additional info"}
            </Popup>
          </Marker>
        )}
        <MapEventHandler setMarkerPosition={setMarkerPosition} setShowDialog={setShowDialog} setMarkerLatLng={setMarkerLatLng} />
      </MapContainer>

      {/* Dialog สำหรับกรอกข้อมูล ใช้ MUI */}
      <Dialog open={showDialog} onClose={handleDialogClose}>
        <DialogTitle>Enter Information for Marker</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Information"
            type="text"
            fullWidth
            value={markerInfo}
            onChange={handleInputChange}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyMap;