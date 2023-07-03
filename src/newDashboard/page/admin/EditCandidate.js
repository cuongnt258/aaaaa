import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import ButtonCustomize from 'assets/theme/components/button/ButtonCustomize';
import Page from 'components/Layout/Page';
import { useEffect, useRef, useState } from 'react';
import { CustomizedToast } from 'components/toast/ToastCustom';

export default function EditCandidate() {
  const location = useLocation();
  const navigate = useNavigate();

  const refFullName = useRef(null);
  const refAddress = useRef(null);
  const refGroupId = useRef(null);
  const refCampaignId = useRef(null);

  const { candidate: candidateDetail } = location.state || {};

  const [age, setAge] = useState(5);

  useEffect(() => {
    if (candidateDetail) {
      const { fullName = '', address = '', groupId = '', campaignId = '' } = candidateDetail || {};
      refFullName.current.value = fullName;
      refAddress.current.value = address;
      refGroupId.current.value = groupId;
      refCampaignId.current.value = campaignId;
    } else {
      CustomizedToast({
        message: 'Không có dữ liệu',
        type: 'ERROR',
      });
    }
  }, []);

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    alert(
      JSON.stringify({
        fullName: data.get('fullName'),
        address: data.get('address'),
        groupId: data.get('groupId'),
        campaignId: data.get('campaignId'),
        age,
      })
    );
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
                    inputRef={refFullName}
                    required
                    fullWidth
                    name="fullName"
                    label="Full name"
                    id="fullName"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField inputRef={refAddress} required fullWidth name="address" label="Address" id="address" />
                </Grid>
                <Grid item xs={12}>
                  <TextField inputRef={refGroupId} required fullWidth name="groupId" label="Group ID" id="groupId" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputRef={refCampaignId}
                    required
                    fullWidth
                    name="campaignId"
                    label="Campaign ID"
                    id="campaignId"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select fullWidth labelId="ageLabel" id="age" value={age} label="Age" onChange={onChangeAge}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Cập nhật
              </Button>
            </Box>
          </Box>
        </Container>
      </Container>
    </Page>
  );
}
