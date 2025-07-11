import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { COLORS } from '../../constants/colors';
import { useCreateBookingMutation, useGetAvailableTimeSlotsMutation, useGetClinicBranchesMutation, useGetDoctorsMutation, useGetOperationsMutation } from '../../redux/slices/apiSlice';
import { useNavigate } from 'react-router-dom';

export default function BookingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clinicBranchId: '',
    date: '',
    operationId: '',
    doctorId: '',
    notes: '',
    timeSlot:''
  });

  const [doctors, setDoctors] = useState([]);
const [branches, setBranches] = useState([]);
const [operations, setOperations] = useState([]);
const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

const [getClinicBranches] = useGetClinicBranchesMutation();
const [getOperations] = useGetOperationsMutation();
const [getDoctors] = useGetDoctorsMutation();
const [getAvailableTimeSlots] = useGetAvailableTimeSlotsMutation();
const [createBooking] = useCreateBookingMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
     const bookingRes=await createBooking(formData).unwrap()
     console.log('Booked Successfully',bookingRes)
     navigate('/')
    }catch(err){
        console.log('Fialed Booking Appointment',err)
    }
  };

useEffect(() => {
  const fetchData = async () => {
    try {
      const branchesRes = await getClinicBranches().unwrap();
      setBranches(branchesRes);

      const operationsRes = await getOperations({page:1,recordPerPage:5}).unwrap();
      setOperations(operationsRes.data);

      const doctorsRes = await getDoctors({page:1,recordPerPage:5}).unwrap();
      setDoctors(doctorsRes.data);
    } catch (err) {
      console.error("Error fetching dropdown data:", err);
    }
  };
  fetchData();
}, []);

useEffect(() => {
  const fetchTimeSlots = async () => {
    if (formData.date && formData.operationId && formData.doctorId &&formData.clinicBranchId) {
      try {
        const res = await getAvailableTimeSlots({
          targetDate: formData.date,
          operationId: +formData.operationId,  
          doctorId: +formData.doctorId       
        }).unwrap();
        setAvailableTimeSlots(res);
      } catch (err) {
        console.error("Failed to fetch time slots", err);
      }
    }
  };

  fetchTimeSlots();
}, [formData.date, formData.operationId, formData.doctorId,formData.clinicBranchId]);

  return (
            console.log(formData),
        console.log(availableTimeSlots),
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        px: { xs: 2, md: 4 },
        gap: 2,
        flexWrap: 'wrap',
        width:'90%'
      }}
    >
      
      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
          <FormControl fullWidth required sx={{
             '& .MuiOutlinedInput-root': {
             borderRadius: '28px',
              height:'40px',
              backgroundColor: '#fff',
             },
              '& fieldset': {
                border: 'none',
              }
        }}>
          <InputLabel>Branches</InputLabel>
          <Select name="clinicBranchId" value={formData.clinicBranchId} onChange={handleChange} label="Branches">
            {branches.map(branch=>{
                return<MenuItem value={branch.clinicBranchId}>{branch.name}</MenuItem>
            })}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          name="date"
          value={formData.date}
          onChange={handleChange}
          type="date"
          InputLabelProps={{ shrink: true }}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
             borderRadius: '28px',
              height:'40px',
              backgroundColor: '#fff',
              '& fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: `1px solid ${COLORS.PRIMARY}`,
              },
            },
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
        <FormControl fullWidth required sx={{
             '& .MuiOutlinedInput-root': {
             borderRadius: '28px',
              height:'40px',
              backgroundColor: '#fff',
             },
              '& fieldset': {
                border: 'none',
              }
        }}>
          <InputLabel>Service</InputLabel>
          <Select name="operationId" value={formData.operationId} onChange={handleChange} label="Service">
               {operations.map(operation=>{
                return<MenuItem value={operation.operationId}>{operation.name}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth required  sx={{  
              '& .MuiOutlinedInput-root': {
             borderRadius: '28px',
              height:'40px',
              backgroundColor: '#fff',
             },
              '& fieldset': {
                border: 'none',
              }}}>
          <InputLabel>Doctor</InputLabel>
          <Select name="doctorId" value={formData.doctorId} onChange={handleChange} label="Doctor">
               {doctors.map(doctor=>{
                return<MenuItem value={doctor.doctorId}>{doctor.name}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Box>
            {/* Time Slots Section as Select */}
      <FormControl
        fullWidth
        required
        sx={{
          mt: 1, mb: 2,
          '& .MuiOutlinedInput-root': {
            borderRadius: '28px',
            height: '40px',
            backgroundColor:
              !formData.date || !formData.operationId || !formData.doctorId || !formData.clinicBranchId
                ? '#E0D7D0'
                  : '#fff',
          },
          '& fieldset': {
            border: 'none',
          },
        }}
      >
        <InputLabel>Time Slot</InputLabel>
        <Select
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleChange}
          label="Time Slot"
          disabled={
            !formData.date ||
            !formData.operationId ||
            !formData.doctorId ||
            !formData.clinicBranchId}
        >
          {availableTimeSlots.length > 0 ? (
            availableTimeSlots.map((slot, idx) => (
              <MenuItem key={slot + idx} value={slot}>{slot}</MenuItem>
            ))
          ) : (
            <MenuItem value="" disabled>
              No available appointments at this day.
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <TextField
        label="Note"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        multiline
        rows={3}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#fff',
            '& fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: `2px solid ${COLORS.PRIMARY}`,
            },
          },
        }}
      />


      <Button
        variant="contained"
        type="submit"
        disabled={!formData.timeSlot}
        sx={{
          borderRadius: '20px',
          backgroundColor: COLORS.PRIMARY,
          textTransform: 'capitalize',
          width: { xs: '60%', md: '40%' },
          alignSelf: { xs: 'center', md: 'start' },
        }}
      >
        Make An Appointment
      </Button>
    </Box>
  );
}
