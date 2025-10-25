document.addEventListener('DOMContentLoaded', function () {
            
            const experienceData = [
                {
                    role: 'Instructor',
                    company: 'University of Debrecen',
                    period: 'Sep 2025 - Present',
                    side: 'left',
                    details: 'Lead theoretical lectures and practical lab sessions for the Software Development Methodologies course (INBPA0521L).<br><br>'
						   + 'Independently design and deliver all theoretical lectures (Waterfall, Agile, Scrum, UML) for a cohort of 36 3rd-year Bachelor\'s students. <br><br>'
						   + 'Manage all hands-on lab sessions and mentor students, providing direct feedback on projects and practical skills.'
                },
				{
                    role: 'PhD Researcher',
                    company: 'University of Debrecen',
                    period: 'Sep 2024 - Present',
                    side: 'right',
                    details: 'Conducting research on state-of-the-art NLP techniques, with a focus on Large Language Models (LLMs), stance detection, document segmentation, and natural language inference.'
                },
                {
                    role: 'PhD Researcher',
                    company: 'Homs University',
                    period: 'Feb 2021 - Aug 2024',
                    side: 'left',
                    details: 'Developed a novel hybrid architecture for stance detection, combining mBERT feature extraction with CNN and LSTM models to outperform traditional fine-tuning.<br><br>'
						   + 'Conducted a comparative study of multilingual transformers (mBERT, XLM-RoBERTa, DistilBERT, mDeBERTa) to assess their effectiveness and knowledge transfer capabilities.<br><br>'
						   + 'Benchmarked state-of-the-art Arabic models (AraBERT, MARBERT, ALBERT) to address specific linguistic challenges.<br><br>'
						   + 'Implemented foundational deep learning models (MLP, CNN, LSTM) for stance detection, leveraging \textbf{AraVec} embeddings to establish a performance baseline.'
                },
                {
                    role: 'Software Engineer',
                    company: 'Central Bank of Syria',
                    period: 'Jun 2018 - Mar 2023',
                    side: 'right',
                    details: 'Spearheaded the full-stack development of a new Insurance Record Management System, leveraging Laravel and PHP to build a robust back-end.<br><br>'
						   + 'Engineered the front-end interface using Blade, HTML, CSS, Bootstrap, JavaScript, and jQuery to create an intuitive and responsive user experience.<br><br>'
						   + 'Designed and implemented the database schema using MySQL, ensuring data integrity and efficient querying for over 10,000 records.<br><br>'
					       + 'Developed and integrated RESTful APIs with Laravel, enabling seamless communication between the front-end and back-end, which supported real-time data updates.<br><br>'
					       + 'Managed the continuous evolution and maintenance of the software over a multi-year period, ensuring system stability, scalability, and performance for a growing user base.<br><br>'
					       + 'Developed and integrated new features based on business requirements, including a role-based access control and a real-time notification component, which improved user security and communication.<br><br>'
                },
                {
                    role: 'Teacher Assistant',
                    company: 'Homs University',
                    period: 'Apr 2017 - Jun 2024',
                    side: 'left',
                    details: 'Mentored and lectured students on a range of computer science topics:<br>'
						   +'Algorithms and Data Structures - Database Management Systems - Advanced Programming (Python) - Programming in Java - Web development.'
                },
				{
                    role: 'Freelance Java Instructor',
                    company: 'Remote',
                    period: 'Jan 2016 - June 2022',
                    side: 'right',
                    details: 'Provided one-on-one and small group instruction in Java, from foundational basics to advanced OOP and data structures, for over 100 international students in the UAE and Saudi Arabia.<br>'
						   +'Mentored students through challenging coding assignments and personal projects, successfully preparing them for academic and professional success in the technology field.'
                }
            ];

            

            const educationData = [
                {
                    degree: 'PhD in Computer Science (Data Science, NLP)',
                    institution: 'University of Debrecen, Hungary',
                    period: 'Sep 2024 - Present'
                },
                {
                    degree: 'PhD in Computer Science (Data Science, NLP)',
                    institution: 'Homs University, Syria',
                    period: 'Feb 2021 - Aug 2024',
                    note: 'Dissertation: Stance Detection in Natural Language Texts Using Deep Learning Techniques'
                },
                {
                    degree: 'MSc in Computer Science',
                    institution: 'Homs University, Syria',
                    period: 'Apr 2017 - Jul 2020',
                    note: 'Thesis: Building Command and Control Information System for Emergency Situations'
                },
                {
                    degree: 'BSc in Computer Science',
                    institution: 'Homs University, Syria',
                    period: 'Aug 2011 - Dec 2016'
                }
            ];

            const timelineContainer = document.getElementById('experience-timeline');
            experienceData.forEach((item, index) => {
                const sideClass = item.side === 'left' ? 'mb-8 flex justify-between items-center w-full right-timeline' : 'mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline';
                const timelineHTML = `
                    <div class="${sideClass}">
                        <div class="order-1 w-5/12"></div>
                        <div class="z-20 flex items-center order-1 bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
                            <h1 class="mx-auto font-semibold text-lg text-white">${experienceData.length - index}</h1>
                        </div>
                        <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 class="font-bold text-gray-800 text-xl">${item.role}</h3>
                            <p class="text-sm font-medium text-indigo-600">${item.company} | ${item.period}</p>
                            <p class="text-sm text-gray-600 mt-2 leading-snug tracking-wide">${item.details}</p>
                        </div>
                    </div>
                `;
                timelineContainer.innerHTML += timelineHTML;
            });

            const educationList = document.getElementById('education-list');
            educationData.forEach(edu => {
                const eduHTML = `
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold text-gray-800">${edu.degree}</h3>
                        <p class="text-indigo-600 font-medium">${edu.institution}</p>
                        <p class="text-sm text-gray-500">${edu.period}</p>
                        ${edu.note ? `<p class="mt-2 text-gray-600 italic">${edu.note}</p>` : ''}
                    </div>
                `;
                educationList.innerHTML += eduHTML;
            });

            const modal = document.getElementById('project-modal');
            const closeModalButton = document.getElementById('close-modal-button');
            const modalTitle = document.getElementById('modal-title');
            const modalContent = document.getElementById('modal-content');

            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('click', () => {
                    const projectIndex = card.getAttribute('data-index');
                    const project = projectsData[projectIndex];
                    modalTitle.textContent = project.title;
                    modalContent.innerHTML = project.details;
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                    setTimeout(() => {
                        modal.querySelector('.modal-backdrop').classList.remove('opacity-0');
                        modal.querySelector('.modal-content').classList.remove('scale-95');
                    }, 10);
                });
            });

            const closeModal = () => {
                modal.querySelector('.modal-backdrop').classList.add('opacity-0');
                modal.querySelector('.modal-content').classList.add('scale-95');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }, 300);
            };

            closeModalButton.addEventListener('click', closeModal);
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });

            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        });
