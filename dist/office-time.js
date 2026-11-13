// Narrative time is separate from simulation time and never adds enemy waves.
export function leakPenalty(kind){return ['boss','deadline'].includes(kind)?{lives:5,minutes:15}:{lives:1,minutes:5};}
export function clockText(minutes){const total=17*60+minutes;return `${String(Math.floor(total/60)%24).padStart(2,'0')}:${String(total%60).padStart(2,'0')}`;}
