import { useState, useMemo } from 'react';
import { ProjectsInterface, ValidCategory, ValidExpType, ValidSkills } from '@/types';
import { Projects } from '@/config/projects';

export const useProjects = () => {
  const [selectedCategories, setSelectedCategories] = useState<ValidCategory[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ValidExpType[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<ValidSkills[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return Projects.filter(project => {
      // Category filter
      if (selectedCategories.length > 0 && 
          !selectedCategories.some(cat => project.category.includes(cat))) {
        return false;
      }

      // Type filter
      if (selectedTypes.length > 0 && !selectedTypes.includes(project.type)) {
        return false;
      }

      // Skills filter
      if (selectedSkills.length > 0 && 
          !selectedSkills.some(skill => project.techStack.includes(skill))) {
        return false;
      }

      // Search query filter
      if (searchQuery && !project.companyName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [selectedCategories, selectedTypes, selectedSkills, searchQuery]);

  const featuredProjects = useMemo(() => {
    return Projects.slice(0, 3);
  }, []);

  const getUniqueCategories = () => {
    const categories = new Set<ValidCategory>();
    Projects.forEach(project => {
      project.category.forEach(cat => categories.add(cat));
    });
    return Array.from(categories);
  };

  const getUniqueSkills = () => {
    const skills = new Set<ValidSkills>();
    Projects.forEach(project => {
      project.techStack.forEach(skill => skills.add(skill));
    });
    return Array.from(skills);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSelectedSkills([]);
    setSearchQuery('');
  };

  return {
    projects: filteredProjects,
    featuredProjects,
    selectedCategories,
    selectedTypes,
    selectedSkills,
    searchQuery,
    setSelectedCategories,
    setSelectedTypes,
    setSelectedSkills,
    setSearchQuery,
    getUniqueCategories,
    getUniqueSkills,
    clearFilters,
    hasActiveFilters: selectedCategories.length > 0 || selectedTypes.length > 0 || 
                     selectedSkills.length > 0 || searchQuery.length > 0
  };
};
