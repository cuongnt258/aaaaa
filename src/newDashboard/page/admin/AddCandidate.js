import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, Container, Grid, Stack, TextField, Typography, Button } from '@mui/material';
import ButtonCustomize from 'assets/theme/components/button/ButtonCustomize';
import Page from 'components/Layout/Page';

export default function AddCandidate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      userName: data.get('userName'),
      password: data.get('password'),
      fullName: data.get('fullName'),
      address: data.get('address'),
      groupId: data.get('groupId'),
      campaignId: data.get('campaignId'),
    });
  };

  return (
    <Page title="Danh sách ứng cử viên">
      <Container maxWidth={false}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Ứng cử viên
          </Typography>
          <ButtonCustomize
            variant="contained"
            component={RouterLink}
            to="/admin/candidates/add"
            nameButton="Thêm ứng cử viên"
          />
        </Stack>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userName"
                    label="Username"
                    name="userName"
                    autoComplete="email"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="password" label="Password" type="password" id="password" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="fullName" label="Full name" id="fullName" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="address" label="Address" id="address" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="groupId" label="Group ID" id="groupId" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="campaignId" label="Campaign ID" id="campaignId" />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Tạo
              </Button>
            </Box>
          </Box>
        </Container>
      </Container>
    </Page>
  );
}
