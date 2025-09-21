import * as React from "react";
import {
  Container,
  Typography,
  Skeleton,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", marginTop: 5 }}>
      <Card sx={{ padding: 4, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            About
          </Typography>
          <div style={{display: "flex", gap: "10px" }}>
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};
export default About;
