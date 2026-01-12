'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder: string;
  required?: boolean;
  className?: string;
}

export default function CustomSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  className = '',
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all text-gray-900 bg-white text-left flex items-center justify-between cursor-pointer hover:border-gray-400"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto animate-fadeIn">
          <ul role="listbox" className="py-2">
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                onClick={() => handleSelect(option.value)}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  value === option.value
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hidden input for form validation */}
      <input
        type="hidden"
        name={id}
        value={value}
        required={required}
      />
    </div>
  );
}
