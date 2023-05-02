import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function(props) {
  return (
    <>
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#ccd6e5",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                position: "fixed",
                bottom: 0
            }}
            >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Typography color="black" variant="h5">
                        {/* React Footer */}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography color="textSecondary" variant="subtitle1">
                    {`© 2023 Octro Inc. All Rights Reserved.`}
                    </Typography>
                </Grid>
                </Grid>
            </Container>
        </Box>
    </>
  );
}