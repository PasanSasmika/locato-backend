import mongoose from "mongoose";

const DashboardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Tutoring', 'General Service', 'Retail', 'Product Sales', 'Restaurant',
            'Fashion', 'General Business', 'Hospital', 'Doctor', 'Diagnostic Center',
            'Service Center', 'Salon', 'Therapy', 'Gym', 'Event Service'
        ],
    },
    subCategories: [{
        type: String,
    }],
    services: [{
        type: String,
    }],
    type: {
        type: String,
        enum: ['Government', 'Private', 'Online', 'In-Person', 'Hybrid', 'Store', 'Service', null],
    },
    subjectStream: {
        type: String,
    },
    subject: {
        type: String,
    },
    genderServed: {
        type: String,
        enum: ['Male', 'Female', 'Unisex', null],
    },
    experience: {
        type: String,
    },
    certificateTherapist: {
        type: Boolean,
    },
    serviceDuration: {
        type: String,
    },
    trainersAvailable: [{
        type: String,
    }],
    membershipPlans: [{
        name: String,
        price: Number,
        duration: String,
    }],
    facilities: [{
        type: String,
    }],
    ladiesTime: {
        type: String,
    },
    packages: [{
        name: String,
        description: String,
        price: Number,
    }],
    advanceReceived: {
        type: Boolean,
    },
    availableForWedding: {
        type: Boolean,
    },
    samples: [{
        type: String,
    }],
    availabilityDate: {
        type: [String],
    },
    cuisineTypes: [{
        type: String,
    }],
    menuHighlights: [{
        type: String,
    }],
    style: {
        type: String,
    },
    sizes: [{
        type: String,
    }],
    brandList: [{
        type: String,
    }],
    productSold: [{
        type: String,
    }],
    warrantyInfo: {
        type: String,
    },
    stockStatus: {
        type: String,
        enum: ['In Stock', 'Out of Stock', 'Limited', null],
    },
    department: {
        type: String,
    },
    emergency24x7: {
        type: Boolean,
    },
    ambulance: {
        type: Boolean,
    },
    testOffered: [{
        type: String,
    }],
    sampleCollection: {
        type: String,
    },
    homeTreat: {
        type: Boolean,
    },
    priceRange: {
        min: Number,
        max: Number,
    },
    approximateFee: {
        type: Number,
    },
    pricingMethod: {
        type: String,
        enum: ['Fixed', 'Hourly', 'Per Session', 'Subscription', null],
    },
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
        validUntil: Date,
    }],
    membershipDiscount: {
        type: Boolean,
    },
    workingDays: [{
        type: String,
    }],
    openHours: {
        type: String,
    },
    availability: {
        type: String,
    },
    visitingHours: {
        type: String,
    },
    appointmentNeeded: {
        type: Boolean,
    },
    walkInAllowed: {
        type: Boolean,
    },
    bookingMethod: {
        type: String,
        enum: ['Online', 'Phone', 'In-Person', 'App', null],
    },
    serviceMode: {
        type: String,
        enum: ['Online', 'In-Person', 'Hybrid', null],
    },
    open247: {
        type: Boolean,
    },
    deliveryAvailable: {
        type: Boolean,
    },
    deliveryPortals: [{
        type: String,
    }],
    deliveryInfo: {
        type: String,
    },
    dineInTakeaway: {
        type: String,
        enum: ['Dine-In', 'Takeaway', 'Both', null],
    },
    paymentMethods: [{
        type: String,
        enum: ['Cash', 'Card', 'UPI', 'Online', 'Other'],
    }],
    parkingAvailable: {
        type: Boolean,
    },
    contactInfo: {
        phone: [String],
        email: String,
        website: String,
        socialMedia: [{
            platform: String,
            url: String,
        }],
    },
    // location: {
    //     address: String,
    //     city: String,
    //     state: String,
    //     country: String,
    //     coordinates: {
    //         lat: Number,
    //         lng: Number,
    //     },
    // },
    areasCovered: [{
        type: String,
    }],
    languages: [{
        type: String,
    }],
    photos: [{
        url: String,
        caption: String,
    }],
    description: {
        type: String,
    },
    rating: {
        average: Number,
        count: Number,
    },
    reviews: [{
        user: String,
        comment: String,
        rating: Number,
        date: Date,
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