export type ServiceCategory = 
  | 'childcare'
  | 'seniorcare'
  | 'housekeeping'
  | 'gardening'
  | 'petcare'
  | 'tutoring'
  | 'cooking'
  | 'laundry';

export interface Provider {
  id: string;
  name: string;
  image?: string;
  rating: number;
  reviewCount: number;
  experience: number;
  services: ServiceCategory[];
  hourlyRate: number;
  location: string;
  bio: string;
  verified: boolean;
  skills: string[];
}

export interface Review {
  id: string;
  providerId: string;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
}

export interface Booking {
  id: string;
  providerId: string;
  userId: string;
  serviceType: ServiceCategory;
  date: Date;
  duration: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
}
