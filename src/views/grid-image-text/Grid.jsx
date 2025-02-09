"use client";
import { Box, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DiamondIcon from "@mui/icons-material/Diamond";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import CategoryIcon from "@mui/icons-material/Category";
import React, { useState } from "react";
import Image from "next/image";

const GridLayout = () => {
  const [expanded, setExpanded] = useState(1);

  const accordionData = [
    {
      id: 1,
      title: "Metal details",
      icon: <CategoryIcon />,
      content: [
        { id: 1, name: "Karatage", value: "18K" },
        { id: 2, name: "Material Color", value: "Yellow" },
        { id: 3, name: "Gross Weight", value: "2.3g" },
        { id: 4, name: "Metal", value: "Gold" },
        { id: 5, name: "Size", value: "19.50MM" },
      ],
    },
    {
      id: 2,
      title: "Diamond details",
      icon: <DiamondIcon />,
      content: [
        { id: 1, name: "Diamond Clarity", value: "S12" },
        { id: 2, name: "Diamond Color", value: "G-H" },
        { id: 3, name: "No. Of Diamonds", value: "04" },
        { id: 4, name: "Diamond Setting", value: "Prong" },
        { id: 5, name: "Diamond Shape", value: "Round" },
      ],
    },
    {
      id: 3,
      title: "General details",
      icon: <InfoIcon />,
      content: [
        { id: 1, name: "Jewellery Type", value: "Diamond Jewellery" },
        { id: 2, name: "Brand", value: "Tanishq" },
        { id: 3, name: "Collection", value: "Aveer" },
        { id: 4, name: "Gender", value: "Men" },
        { id: 5, name: "Occasion", value: "Casual Wear" },
      ],
    },
  ];

  const accordionDesc = {
    id: 1,
    name: "Description",
    icon: <DescriptionIcon />,
    value:
      "Step out in style with this alluring finger ring crafted in 18 Karat Yellow Gold in a high polished finish for the modern man. Stone Clarity SI2 Add a hint of panache to your outstanding style with this diamond studded square ring and watch as you become the center of attention.",
  };

  const handleOnChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        paddingX: "20px",
        paddingY: "30px",
        background: "white",
      }}
    >
      <Grid container spacing={4} sx={{ height: "100%" }}>
        <Grid item xs={6}>
          <Box
            sx={{
              height: "80%",
              position: "relative",
              width: "100%",
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <Image
              src={"/501145FAAAC02_1.webp"}
              alt="Product image"
              layout="fill"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: "25px" }}>
            <Typography variant="h4" sx={{ color: "black" }}>
              Tanishq Ring{" "}
            </Typography>
          </Box>
          <Box>
            {accordionData?.map((data) => (
              <Accordion
                key={data.id}
                // defaultExpanded={data.id === 1}
                expanded={expanded === data.id}
                onChange={handleOnChange(data.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ fontSize: "17px", textTransform: "uppercase" }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    {data?.icon}
                    <Typography> {data?.title}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    {data?.content?.map((data) => (
                      <Grid
                        item
                        xs={4}
                        key={data.id}
                        sx={{ marginBottom: "20px" }}
                      >
                        <Typography
                          sx={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          {data?.value}
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "gray" }}>
                          {" "}
                          {data?.name}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontSize: "17px", textTransform: "uppercase" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {accordionDesc?.icon}
                  <Typography> {accordionDesc?.name}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{accordionDesc?.value}</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridLayout;
