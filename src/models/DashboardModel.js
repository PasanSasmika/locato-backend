import mongoose from "mongoose";

const DashboardSchema = new mongoose.Schema({
    // Add a reference to the user who created this dashboard entry
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assumes you have a 'User' model
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        // Expanded enum to match all categories from your frontend
        enum: [
            'Tuition', 'Home Repair', 'Supermarkets', 'Electronics', 'Hardware',
            'Restaurant', 'Clothing', 'Pharmacy', 'Hospital', 'Private', 'Labs',
            'Ayurveda', 'Saloon', 'Spa', 'Fitness Center', 'Bridle makeup/ Beauty care'
        ],
    },
    tutorName: { // Added from frontend form
        type: String,
    },
    subCategories: [String],
    services: [String],
    type: String,
    subjectStream: String,
    subject: String,
    genderServed: String,
    experience: String,
    certificateTherapist: Boolean,
    serviceDuration: String,
    trainersAvailable: [String],
    membershipPlans: [{
        name: String,
        price: Number,
        duration: String,
    }],
    facilities: [String],
    ladiesTime: String,
    packages: [{
        name: String,
        description: String,
        price: Number,
    }],
    advanceReceived: Boolean,
    availableForWedding: Boolean,
    samples: [String],
    availabilityDate: [String],
    cuisineTypes: [String],
    menuHighlights: [String],
    style: String,
    sizes: [String],
    brandList: [String],
    productSold: [String],
    warrantyInfo: String,
    stockStatus: String,
    department: String,
    emergency24x7: Boolean,
    ambulance: Boolean,
    testOffered: [String],
    sampleCollection: String,
    homeTreat: Boolean,
    priceRange: {
        min: Number,
        max: Number,
    },
    approximateFee: Number,
    pricingMethod: String,
    priceList: [{
        service: String,
        price: Number,
    }],
    discounts: [{
        description: String,
        percentage: Number,
    }],
    offers: [{
        description: String,
        validUntil: String, // Changed to String to simplify from frontend
    }],
    membershipDiscount: Boolean,
    workingDays: [String],
    openHours: String,
    availability: String,
    visitingHours: String,
    appointmentNeeded: Boolean,
    walkInAllowed: Boolean,
    bookingMethod: String,
    serviceMode: String,
    open247: Boolean,
    deliveryAvailable: Boolean,
    deliveryPortals: [String],
    deliveryInfo: String,
    dineInTakeaway: String,
    paymentMethods: [String],
    parkingAvailable: Boolean,
    contactInfo: {
        phone: [String],
        email: String,
        website: String,
        socialMedia: [{
            platform: String,
            url: String,
        }],
    },
    // Location schema is now active
    location: {
        address: String,
        city: String,
        state: String,
        country: String,
        coordinates: {
            lat: Number,
            lng: Number,
        },
    },
    areasCovered: [String],
    languages: [String],
    photos: [{
        url: String,
        caption: String,
    }],
    description: String,
    rating: Number, // Simplified to a single number as per frontend state
    reviews: [{
        reviewer: String,
        comment: String,
        rating: Number,
    }],
    nextUpdateDate: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

const Dashboard = mongoose.model("Dashboard", DashboardSchema);

export default Dashboard;