export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cal-history');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cal-history', serializedState);
  } catch {
    console.error('Failed to save to Local Storage');
  }
};
