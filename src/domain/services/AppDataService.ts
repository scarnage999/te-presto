import { Feature, Testimonial, AppInfo } from '../models/Feature';

export interface AppDataService {
  getAppInfo(): AppInfo;
  getFeatures(): Feature[];
  getTestimonials(): Testimonial[];
}