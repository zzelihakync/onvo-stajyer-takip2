"use client";

import {
  Box,
  Paper,
  Typography,
  Button,
  Chip,
  Grid,
  Divider,
  Avatar,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import { useParams, useRouter } from "next/navigation";

import { interns } from "../../../data/stajyerler";

export default function StajyerDetayPage() {
  const router = useRouter();
  const params = useParams();

  const id = Number(params.id);

  const intern = interns.find((item) => item.id === id);

  if (!intern) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f5f7fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 5,
            textAlign: "center",
            border: "1px solid #e0e5eb",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#17324d",
              mb: 2,
            }}
          >
            Stajyer Bulunamadı
          </Typography>

          <Typography
            sx={{
              color: "#64748b",
              mb: 3,
            }}
          >
            Aradığınız stajyer kaydı bulunamadı.
          </Typography>

          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => router.push("/yetkili/stajyerler")}
            sx={{
              backgroundColor: "#2478b5",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#1d6598",
              },
            }}
          >
            Stajyerlere Dön
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        p: {
          xs: 2,
          md: 4,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        {/* GERİ DÖN */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/yetkili/stajyerler")}
          sx={{
            mb: 2,
            color: "#2478b5",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "transparent",
              color: "#174f78",
            },
          }}
        >
          Stajyerlere Dön
        </Button>

        {/* BAŞLIK */}
        <Paper
          elevation={0}
          sx={{
            border: "1px solid #e0e5eb",
            borderRadius: 3,
            overflow: "hidden",
            mb: 3,
          }}
        >
          <Box
            sx={{
              p: {
                xs: 2.5,
                md: 4,
              },
              display: "flex",
              alignItems: {
                xs: "flex-start",
                md: "center",
              },
              justifyContent: "space-between",
              gap: 3,
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  width: 72,
                  height: 72,
                  backgroundColor: "#eaf3fa",
                  color: "#2478b5",
                }}
              >
                {intern.name.charAt(0)}
              </Avatar>

              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#17324d",
                    mb: 0.5,
                  }}
                >
                  {intern.name}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    mb: 1,
                  }}
                >
                  {intern.position}
                </Typography>

                <Chip
                  label={intern.status}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    backgroundColor:
                      intern.status === "Aktif"
                        ? "#dff4e3"
                        : "#fff0dc",
                    color:
                      intern.status === "Aktif"
                        ? "#27813a"
                        : "#d96b00",
                  }}
                />
              </Box>
            </Box>

            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              onClick={() => {
                window.location.href = `mailto:${intern.email}`;
              }}
              sx={{
                backgroundColor: "#2478b5",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                "&:hover": {
                  backgroundColor: "#1d6598",
                },
              }}
            >
              E-posta Gönder
            </Button>
          </Box>
        </Paper>

        {/* BİLGİLER */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #e0e5eb",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#17324d",
                    mb: 0.5,
                  }}
                >
                  Stajyer Bilgileri
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: 14,
                  }}
                >
                  Stajyerin temel bilgileri ve staj süreci.
                </Typography>
              </Box>

              <Divider />

              <Box sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  {/* E-POSTA */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 42,
                          height: 42,
                          backgroundColor: "#eaf3fa",
                          color: "#2478b5",
                        }}
                      >
                        <EmailIcon fontSize="small" />
                      </Avatar>

                      <Box>
                        <Typography
                          sx={{
                            color: "#64748b",
                            fontSize: 13,
                            mb: 0.3,
                          }}
                        >
                          E-posta
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: "#17324d",
                          }}
                        >
                          {intern.email}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* DEPARTMAN */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 42,
                          height: 42,
                          backgroundColor: "#eaf3fa",
                          color: "#2478b5",
                        }}
                      >
                        <BusinessIcon fontSize="small" />
                      </Avatar>

                      <Box>
                        <Typography
                          sx={{
                            color: "#64748b",
                            fontSize: 13,
                            mb: 0.3,
                          }}
                        >
                          Departman
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: "#17324d",
                          }}
                        >
                          {intern.department}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* POZİSYON */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 42,
                          height: 42,
                          backgroundColor: "#eaf3fa",
                          color: "#2478b5",
                        }}
                      >
                        <WorkIcon fontSize="small" />
                      </Avatar>

                      <Box>
                        <Typography
                          sx={{
                            color: "#64748b",
                            fontSize: 13,
                            mb: 0.3,
                          }}
                        >
                          Pozisyon
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: "#17324d",
                          }}
                        >
                          {intern.position}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* STAJ TARİHLERİ */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 42,
                          height: 42,
                          backgroundColor: "#eaf3fa",
                          color: "#2478b5",
                        }}
                      >
                        <CalendarMonthIcon fontSize="small" />
                      </Avatar>

                      <Box>
                        <Typography
                          sx={{
                            color: "#64748b",
                            fontSize: 13,
                            mb: 0.3,
                          }}
                        >
                          Staj Tarihleri
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: "#17324d",
                          }}
                        >
                          {intern.start}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#64748b",
                            fontSize: 13,
                          }}
                        >
                          {intern.end}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* SAĞ TARAF */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #e0e5eb",
                borderRadius: 3,
                overflow: "hidden",
                mb: 3,
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#17324d",
                    mb: 0.5,
                  }}
                >
                  Staj Durumu
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: 14,
                  }}
                >
                  Güncel staj bilgileri
                </Typography>
              </Box>

              <Divider />

              <Box sx={{ p: 3 }}>
                {/* RAPOR */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 44,
                      height: 44,
                      backgroundColor: "#eaf3fa",
                      color: "#2478b5",
                    }}
                  >
                    <AssessmentIcon />
                  </Avatar>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 13,
                        color: "#64748b",
                      }}
                    >
                      Rapor Durumu
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#17324d",
                      }}
                    >
                      {intern.report}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ mb: 3 }} />

                {/* DEVAM */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 44,
                      height: 44,
                      backgroundColor: "#eaf3fa",
                      color: "#2478b5",
                    }}
                  >
                    <EventAvailableIcon />
                  </Avatar>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 13,
                        color: "#64748b",
                      }}
                    >
                      Devam Durumu
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#17324d",
                      }}
                    >
                      {intern.attendance}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>

            {/* DURUM */}
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #e0e5eb",
                borderRadius: 3,
                p: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#17324d",
                  mb: 2,
                }}
              >
                Genel Durum
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "#64748b",
                  }}
                >
                  Staj Durumu
                </Typography>

                <Chip
                  label={intern.status}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    backgroundColor:
                      intern.status === "Aktif"
                        ? "#dff4e3"
                        : "#fff0dc",
                    color:
                      intern.status === "Aktif"
                        ? "#27813a"
                        : "#d96b00",
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}       