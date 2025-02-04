import Layout from "@/components/layout/Layout";
import TitleTile from "@/components/title/TitleTile";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Inter } from "next/font/google";

import { publicNavItems } from "@/components/layout/navigationItems";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const onClick = (e: any, slug: string) => {
    console.log("Selected", slug);
    router.push(slug);
  };

  return (
    <div style={{ backgroundImage: `url(/splashbanner.jpg)` }}>
      <Layout>
        <Grid
          container
          alignItems="center"
          direction="column"
          sx={{
            py: 4,
          }}
        >
          <Grid item>
            <Typography
              variant="h1"
              align="center"
              sx={{ fontWeight: "bold", fontSize: 50 }}
            >
              Open Libry - die <b>einfache</b> Bücherei Verwaltung
            </Typography>
          </Grid>

          <Grid container alignItems="center" sx={{ pt: 6, mt: 8 }}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ px: 10 }}
            >
              {publicNavItems.map((p) => {
                return (
                  <Grid
                    item
                    key={p.slug}
                    xs={12}
                    sm={6}
                    md={3}
                    justifyContent="center"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                      mb: 0,
                      my: 5,
                    }}
                  >
                    <TitleTile
                      title={p.title}
                      subtitle={p.subtitle}
                      onClick={(e: any) => onClick(e, p.slug)}
                    />
                  </Grid>
                );
              })}
            </Grid>{" "}
          </Grid>
        </Grid>
      </Layout>{" "}
    </div>
  );
}
