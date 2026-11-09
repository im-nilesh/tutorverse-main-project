import { BookOpen, CalendarDays, Laptop, ShieldCheck, Star, Users, Zap } from "lucide-react";

export const benefits = [
  { icon: ShieldCheck, title: "Verified Tutors", text: "Background-checked & trusted" },
  { icon: Zap, title: "Wide Range of Subjects", text: "From school to competitive exams" },
  { icon: Laptop, title: "Online & Home Classes", text: "Learn from anywhere, your choice" },
  { icon: CalendarDays, title: "Flexible Scheduling", text: "Choose a time that works for you" },
];

export const subjects = ["Mathematics", "Science", "Computer Science", "English", "Social Science", "Biology", "Chemistry"];
export const subjectIcons = ["∑", "⚗", "⌘", "文", "▤", "♧", "✿"];

export const tutors = [
  { name: "Ananya Rao", subject: "Mathematics · Physics", tags: ["Mathematics", "Science"], rating: "4.9", reviews: "128", price: "₹600", exp: "5 years", mode: "Online & Home", initials: "AR", color: "lavender" },
  { name: "Rohan Kulkarni", subject: "Computer Science · DSA", tags: ["Computer Science"], rating: "4.8", reviews: "94", price: "₹800", exp: "4 years", mode: "Online", initials: "RK", color: "blue" },
  { name: "Priya Menon", subject: "English · Social Science", tags: ["English", "Social Science"], rating: "4.9", reviews: "167", price: "₹500", exp: "6 years", mode: "Online & Home", initials: "PM", color: "pink" },
  { name: "Aditya Shah", subject: "Chemistry · Biology", tags: ["Science", "Chemistry", "Biology"], rating: "4.8", reviews: "102", price: "₹700", exp: "5 years", mode: "Online & Home", initials: "AS", color: "amber" },
];

export const stats = [[Users, "10K+", "Verified Tutors"], [BookOpen, "100+", "Subjects"], [Users, "50K+", "Students"], [Star, "4.9★", "Average Rating"]];

export const quotes = [
  { initials: "KS", color: "lavender", text: "I found a great tutor for my son's 10th grade Maths. The profile details and reviews really helped me choose the right tutor.", by: "Kavita S.", role: "Parent" },
  { initials: "AJ", color: "blue", text: "As a tutor, this platform has helped me connect with genuine students. The profile and schedule features are simple and useful.", by: "Arjun R.", role: "Tutor" },
];

export const studentSteps = ["Search for tutors by subject or location", "View profiles, experience, schedules & reviews", "Contact the tutor and book your classes"];
export const tutorSteps = ["Create your tutor profile", "Add subjects, experience, schedules and fees", "Start receiving enquiries and book classes"];
