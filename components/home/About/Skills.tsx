// // components/ProgressBars.tsx
// import { useEffect, useRef } from 'react';

// const ProgressBars = () => {
//     const barsRef = useRef<(HTMLDivElement | null)[]>([]);

//     useEffect(() => {
//         barsRef.current.forEach((bar) => {
//             if (bar) { // Ensure the bar is not null
//                 const target = bar.dataset.target;
//                 let width = 0;

//                 const interval = setInterval(() => {
//                     if (width >= Number(target)) {
//                         clearInterval(interval);
//                     } else {
//                         width++;
//                         bar.style.width = width + '%';
//                     }
//                 }, 20); // Update every 20 milliseconds
//             }
//         });
//     }, []);

//     return (
//         <div>
//             {[
//                 { label: 'R', target: 100 },
//                 { label: 'ASReml-R', target: 100 },
//                 { label: 'SAP', target: 100 },
//                 { label: 'SPSS', target: 100 },
//                 { label: 'STATA', target: 90 },
//                 { label: 'LaTex', target: 90 },
//                 { label: 'Genstat', target: 90 },
//                 { label: 'Python', target: 80 },
//                 { label: 'ArcGIS', target: 60 },
//                 { label: 'Minitab', target: 95 },
//             ].map((item, index) => (
//                 <div key={index} className="progress-container">
//                     <div
//                         ref={(el) => (barsRef.current[index] = el)} // Correctly assigning the ref
//                         data-target={item.target}
//                         className="progress-bar"
//                         style={{ width: '0%', backgroundColor: item.target === 100 ? '#14B8A6' : '#A855F7' }}
//                     >
//                         <span className="label">{item.target}%</span>
//                     </div>
//                     <p className='text-white'>{item.label}</p>
//                 </div>
//             ))}
//             <style jsx>{`
//                 .progress-bar {
//                     transition: width 2s ease;
//                     height: 100%;
//                 }
//                 .progress-container {
//                     background-color: #1E3A8A; /* Dark blue */
//                     border-radius: 8px;
//                     overflow: hidden;
//                     margin-bottom: 12px;
//                 }
//                 .label {
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     height: 100%;
//                     color: white;
//                     font-size: 0.875rem;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default ProgressBars;