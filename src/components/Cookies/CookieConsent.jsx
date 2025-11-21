'use client';
import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Button, Modal, Typography } from "@mui/material";

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`cookie-tabpanel-${index}`}
      aria-labelledby={`cookie-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `cookie-tab-${index}`,
    "aria-controls": `cookie-tabpanel-${index}`,
  };
}

export default function CookieConsent() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted =
      localStorage.getItem("digitalAuraCookies") ||
      document.cookie.includes("digitalAuraCookies=true");
    if (!accepted) setOpen(true);
  }, []);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const handleAccept = () => {
    localStorage.setItem("digitalAuraCookies", "true");
    document.cookie =
      "digitalAuraCookies=true; path=/; max-age=" + 60 * 60 * 24 * 365; // 1 year
    setOpen(false);
  };

  return (
    <Modal open={open}>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 400,
          bgcolor: "white",
          boxShadow: 4,
          borderRadius: 2,
          p: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: { backgroundColor: "var(--primary-color)" } // indicator color
          }}
        >
          <Tab
            label="Cookies Policy"
            {...a11yProps(0)}
            sx={{
              "&.Mui-selected": {
                color: "var(--primary-color)", // active tab text color
              },
            }}
          />
          <Tab
            label="What Are Cookies?"
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": {
                color: "var(--primary-color)", // active tab text color
              },
            }}
          />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <Typography variant="body2">
            We use cookies to improve your browsing experience, analyze traffic,
            and provide relevant content. These cookies do not store personal
            information.
          </Typography>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Typography variant="body2">
            Cookies are small text files stored in your browser. They help
            websites remember your preferences, track analytics, and improve
            functionality. Cookies do NOT store passwords or personal files.
          </Typography>
        </CustomTabPanel>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: "var(--primary-color)" }}
          onClick={handleAccept}
        >
          Accept Cookies
        </Button>
      </Box>
    </Modal>
  );
}
