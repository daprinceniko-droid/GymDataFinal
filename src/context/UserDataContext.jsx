import React, { createContext, useState, useCallback, useEffect } from 'react';

export const UserDataContext = createContext();

const STORAGE_KEY = 'bodyLikeTea_userData';
const RESULTS_STORAGE_KEY = 'bodyLikeTea_results';

const DEFAULT_USER_DATA = {
  age: 22,
  height: 160,
  weight: 58,
  sex: 'female',
  activityLevel: 'moderate',
  weightGoal: 'lose',
};

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_USER_DATA;
    } catch {
      return DEFAULT_USER_DATA;
    }
  });

  const [results, setResults] = useState(() => {
    try {
      const stored = localStorage.getItem(RESULTS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Persist userData to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } catch (error) {
      console.error('Failed to save user data:', error);
    }
  }, [userData]);

  // Persist results to localStorage whenever they change
  useEffect(() => {
    try {
      if (results) {
        localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(results));
      } else {
        localStorage.removeItem(RESULTS_STORAGE_KEY);
      }
    } catch (error) {
      console.error('Failed to save results:', error);
    }
  }, [results]);

  const updateUserData = useCallback((newData) => {
    setUserData((prev) => ({
      ...prev,
      ...newData,
    }));
  }, []);

  const setCalculationResults = useCallback((calculationResults) => {
    setResults(calculationResults);
  }, []);

  const clearUserData = useCallback(() => {
    setUserData(DEFAULT_USER_DATA);
    setResults(null);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(RESULTS_STORAGE_KEY);
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        updateUserData,
        results,
        setCalculationResults,
        clearUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
