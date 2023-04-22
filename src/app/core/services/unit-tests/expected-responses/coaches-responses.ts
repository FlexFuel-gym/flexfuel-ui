import { CoachResponse, RegisterToCoachResponse, Response } from '../../../interfaces';

export const coachRegisterToCoachResponse: Response<RegisterToCoachResponse> = {
  data: {
    order: {
      id: 'order-id',
      coachId: 'coach-id',
      customerId: 'customer-id'
    },
    customer: {
      id: 'customer-id',
      periodOfTime: '10:00 - 11:00',
      date: '07-10-2004',
      fullName: 'Vadim Parpolita',
      phoneNumber: '380689848420'
    }
  },
  success: true
};

export const coachGetCoachesResponse: Response<CoachResponse> = {
  data: {
    coaches: [
      {
        fullName: 'Olexander Rud',
        id: 'id',
        image: 'image',
        schedule: [
          {
            periodOfTime: '10:00 - 11:00',
            isAvailable: true
          },
          {
            periodOfTime: '11:00 - 12:00',
            isAvailable: false
          }
        ],
        description: 'description',
        pricePerLesson: 300

      }
    ]
  },
  success: true
};
