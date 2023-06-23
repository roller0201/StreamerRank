import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import StreamerService from '../../services/StreamerService';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { platforms } from '../../data';

const initialStateStreamer = {
  id: 0,
  name: '',
  platform: null,
  description: '',
};

const RankingForm = ({ setOpenRankingForm, reload, setReload }) => {
  const [saving, setSaving] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      initialStateStreamer,
    },
  });

  const onSubmit = async (data) => {
    setSaving(true);
    const streamerData = JSON.stringify({
      id: data.id,
      name: data.name,
      platform: data.platform,
      description: data.description,
    });
    console.log(streamerData);
    return;
    const res = await StreamerService.AddStreamer(streamerData);
    if (res.isError) {
      console.log(isError);
      setSaving(false);
      return;
    }
    setReload(reload++);
    setSaving(false);
    setOpenRankingForm(false);
  };

  const handleClear = () => {
    reset(initialState);
  };

  return (
    <Dialog open={true}>
      <DialogTitle sx={{ display: 'flex' }}>
        {'Add your streamer'}
        <Button variant='text' onClick={() => setOpenRankingForm(false)}>
          <ClearOutlinedIcon />
        </Button>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <TextField
            autoFocus
            variant='standard'
            {...register('name', { required: 'This field is required' })}
            label={'Streamer name'}
            required
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
          <FormControl sx={{ width: '100%' }}>
            <InputLabel>{'Platform'}</InputLabel>
            <Controller
              control={control}
              name={'platform'}
              rules={{ required: 'This field is required' }}
              render={({ field: { onChange, value } }) => (
                <Select
                  label={'platform'}
                  value={value || ''}
                  onChange={onChange}
                  error={Boolean(errors.platform)}
                >
                  {platforms.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.platform && (
              <FormHelperText sx={{ marginLeft: 0 }} error>
                {errors.platform.message}
              </FormHelperText>
            )}
          </FormControl>
          <TextField
            variant='standard'
            {...register('description', { required: 'This field is required' })}
            label={'Streamer description'}
            required
            error={Boolean(errors.description)}
            helperText={errors.description?.message}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant='outlined'
          startIcon={<ClearOutlinedIcon />}
          size='small'
          onClick={() => handleClear()}
          color='info'
        >
          {'Clear'}
        </Button>
        <Button
          variant='text'
          size='small'
          onClick={() => {
            setOpenRankingForm(false);
          }}
          startIcon={<ClearOutlinedIcon />}
        >
          {'Cancel'}
        </Button>
        <LoadingButton
          loading={saving === undefined ? false : saving}
          loadingIndicator={'Saving'}
          variant='contained'
          type='submit'
          onClick={handleSubmit(onSubmit)}
        >
          {'Save'}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default RankingForm;
