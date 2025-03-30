"use client";

import { useState } from "react";
import { CircleDot, Plus, Minus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";


function contact() {


    const steps = [
        { number: 1, label: "" },
        { number: 2, label: "" },
        { number: 3, label: "" },
        { number: 4, label: "" },
        { number: 5, label: "" }
    ];

    const options = [
        {
            id: "product",
            title: "I want to create a product",
           
        },
        {
            id: "talent",
            title: "I need top-notch talent",
           
        }
    ];

    const skills = [
        { id: 'html', name: 'HTML' },
        { id: 'css', name: 'CSS' },
        { id: 'javascript', name: 'JavaScript' },
        { id: 'angular', name: 'Angular' },
        { id: 'react', name: 'React' },
        { id: 'vuejs', name: 'Vue.js' },
        { id: 'ios', name: 'iOS' },
        { id: 'android', name: 'Android' },
        { id: 'ionic', name: 'Ionic' },
        { id: 'react-native', name: 'React Native' },
        { id: 'flutter', name: 'Flutter' },
        { id: 'java', name: 'Java' },
        { id: 'nodejs', name: 'Node.js' },
        { id: 'python', name: 'Python' }
    ];

    interface SkillQuantity {
        id: string;
        quantity: number;
    }

    interface ContactForm {
        fullName: string;
        email: string;
        phone: string;
        company: string;
        privacyAccepted: boolean;
    }

    const [currentStep, setCurrentStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [projectDescription, setProjectDescription] = useState("");
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [skillQuantities, setSkillQuantities] = useState<SkillQuantity[]>([]);
    const [contactForm, setContactForm] = useState<ContactForm>({
        fullName: "",
        email: "",
        phone: "+351",
        company: "",
        privacyAccepted: false
    });

    const handleNext = () => {
        if (currentStep === 3) {
            const initialQuantities = selectedSkills.map(skillId => ({
                id: skillId,
                quantity: 1
            }));
            setSkillQuantities(initialQuantities);
        }
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const toggleSkill = (skillId: string) => {
        setSelectedSkills(prev =>
            prev.includes(skillId)
                ? prev.filter(id => id !== skillId)
                : [...prev, skillId]
        );
    };

    const updateQuantity = (skillId: string, delta: number) => {
        setSkillQuantities(prev =>
            prev.map(sq =>
                sq.id === skillId
                    ? { ...sq, quantity: Math.max(1, sq.quantity + delta) }
                    : sq
            )
        );
    };

    const getSkillName = (skillId: string) => {
        return skills.find(skill => skill.id === skillId)?.name || skillId;
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log('Form submitted:', {
            option: selectedOption,
            description: projectDescription,
            skills: skillQuantities,
            contact: contactForm
        });
    };

    const isSubmitDisabled = () => {
        return !contactForm.fullName ||
            !contactForm.email ||
            !contactForm.phone ||
            !contactForm.company ||
            !contactForm.privacyAccepted;
    };
    return (
        <main className=" bg-[#020817] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Contact link */}
                <div className="bg-[#3276de14] xs:mx-auto lg:mx-auto xl:mx-auto lg:text-left lg:mx-0 sm:mx-auto w-[180px] xs:w-[120px] h-[45px] xs:h-[35px] text-center flex items-center justify-center rounded-full mb-4">
                    <h2 className="bg-gradient-to-r from-[#aab3e3] via-[#cf769a] to-[#A70A4A] font-inter font-semibold text-[14px] xs:text-[10px] bg-clip-text text-transparent">
                       Contact
                    </h2>
                </div>

                {/* Main heading */}
                <div className="text-center mb-16">
                    <h1 className="text-2xl sm:text-3xl font-inter xl:font-normal xl:text-[35px] md:text-4xl lg:text-5xl font-bold mb-8">
                        Hi there! Use our configurator & start building.
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                        Answer a few quick questions and let's build something great together
                    </p>
                </div>

                {/* Progress steps */}
                <div className="relative mb-16">
                    <div className="hidden sm:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2" />

                    <div className="flex justify-between relative">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`flex flex-col items-center relative ${step.number === currentStep ? 'text-[#4B8BF4]' :
                                        step.number < currentStep ? 'text-[#4B8BF4]' : 'text-gray-600'
                                    }`}
                            >
                                <div
                                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${step.number <= currentStep
                                            ? 'bg-[#4B8BF4] text-white'
                                            : 'bg-gray-800 text-gray-600'
                                        }`}
                                >
                                    {step.number === currentStep ? (
                                        <CircleDot className="w-5 h-5" />
                                    ) : (
                                        step.number
                                    )}
                                </div>
                                <span className="mt-2 text-xs sm:text-sm hidden sm:block">
                                    {step.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step content */}
                <div className="max-w-3xl mx-auto">
                    {currentStep === 1 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                            {options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => {
                                        setSelectedOption(option.id);
                                        setCurrentStep(2);
                                    }}
                                    className={`
                  p-6  text-center rounded-full transition-all duration-300
                  ${selectedOption === option.id
                                            ? 'bg-[#4B8BF4] text-white transform scale-105'
                                            : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
                                        }
                `}
                                >
                                    <span className="text-2xl mb-0 block">{option.icon}</span>
                                    <h3 className="text-lg rounded-full  sm:text-xl font-semibold">
                                        {option.title}
                                    </h3>
                                </button>
                            ))}
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <h2 className="text-[15px] font-nomal font-inter mb-4">
                                    Let's turn ideas into reality
                                </h2>
                                
                            </div>

                            <Textarea
                                value={projectDescription}
                                onChange={(e) => setProjectDescription(e.target.value)}
                                placeholder="Describe your project"
                                className="min-h-[200px] bg-gray-800 border-gray-700 text-white placeholder-gray-400 resize-none"
                            />

                            <div className="flex justify-end gap-[10px] pt-4">
                                <Button
                                    onClick={handlePrevious}
                                    variant="outline"
                                    className="bg-transparent border-white hover:bg-white hover:text-[#0A2040] "
                                >
                                    Previous
                                </Button>
                                <Button
                                    onClick={handleNext}
                                    className="bg-[#f4f4f4] text-[#0A2040] hover:bg-transparent hover:border-[2px] hover:text-white hover:border-white"
                                    disabled={!projectDescription.trim()}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <h2 className="text-[15px] font-nomal font-inter mb-4">
                                    Sounds cool! What skills will you need on the team?
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {skills.map((skill) => (
                                    <button
                                        key={skill.id}
                                        onClick={() => toggleSkill(skill.id)}
                                        className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${selectedSkills.includes(skill.id)
                                                ? 'bg-[#4B8BF4] text-white'
                                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }
                  `}
                                    >
                                        {skill.name}
                                    </button>
                                ))}
                            </div>

                            <div className="flex justify-end gap-[10px] pt-4">
                                <Button
                                    onClick={handlePrevious}
                                    variant="outline"
                                    className="bg-transparent border-white hover:bg-white hover:text-[#0A2040] "
                                >
                                    Previous
                                </Button>
                                <Button
                                    onClick={handleNext}
                                    className="bg-[#f4f4f4] text-[#0A2040] hover:bg-transparent hover:border-[2px] hover:text-white hover:border-white"
                                    disabled={selectedSkills.length === 0}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <h2 className="text-[15px] font-normal font-inter mb-4">
                                    How many developers do you need?
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {skillQuantities.map((sq) => (
                                    <div
                                        key={sq.id}
                                        className="flex items-center justify-between bg-gray-800 rounded-lg p-4"
                                    >
                                        <span className="text-lg">{getSkillName(sq.id)}</span>
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => updateQuantity(sq.id, -1)}
                                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center">{sq.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(sq.id, 1)}
                                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-end gap-[10px] pt-4">
                                <Button
                                    onClick={handlePrevious}
                                    variant="outline"
                                    className="bg-transparent border-white hover:bg-white hover:text-[#0A2040] "
                                >
                                    Previous
                                </Button>
                                <Button
                                    onClick={handleNext}
                                    className="bg-[#f4f4f4] text-[#0A2040] hover:bg-transparent hover:border-[2px] hover:text-white hover:border-white"
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <h2 className="text-[20px] font-normal font-inter mb-4">
                                    Great! Let's get in touch
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        value={contactForm.fullName}
                                        onChange={(e) => setContactForm(prev => ({ ...prev, fullName: e.target.value }))}
                                        placeholder="Enter your full name"
                                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="email"
                                        value={contactForm.email}
                                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                                        placeholder="Enter your valid email"
                                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex">
                                        <Input
                                            value={contactForm.phone}
                                            onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Company Name <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        value={contactForm.company}
                                        onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                                        placeholder="Enter your business name"
                                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="privacy"
                                    checked={contactForm.privacyAccepted}
                                    onCheckedChange={(checked) =>
                                        setContactForm(prev => ({ ...prev, privacyAccepted: checked as boolean }))
                                    }
                                    className="border-gray-700"
                                />
                                <label
                                    htmlFor="privacy"
                                    className="text-sm text-gray-300"
                                >
                                    You agree to our friendly{" "}
                                    <a href="#privacy" className="text-[#4B8BF4] hover:text-[#6BA1FF]">
                                        privacy policy
                                    </a>
                                </label>
                            </div>

                            <div className="flex justify-end gap-[10px] pt-4">
                                <Button
                                    onClick={handlePrevious}
                                    variant="outline"
                                    className="bg-transparent border-white hover:bg-white hover:text-[#0A2040] "
                                >
                                    Previous
                                </Button>
                                <Button
                                    onClick={handleSubmit}
                                    className="bg-[#f4f4f4] text-[#0A2040] hover:bg-transparent hover:border-[2px] hover:text-white hover:border-white"
                                    disabled={isSubmitDisabled()}
                                >
                                    <span>Submit</span>
                                    <Check className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default contact
