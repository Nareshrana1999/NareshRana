<!-- GitHub Profile README with Interactive Elements -->
<div align="center" style="font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; max-width: 1200px; margin: 0 auto; padding: 0 20px;">
  <!-- Animated Header -->
  <div style="margin: 2rem 0 1.5rem 0; position: relative;">
    <h1 style="font-size: 2.8rem; margin: 0; background: linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradient 8s ease infinite; background-size: 200% 200%;">
      <span class="typing-text">Hi, I'm Naresh Rana</span>
      <span class="wave" style="display: inline-block; animation: wave 2s infinite;">👋</span>
    </h1>
    <p style="font-size: 1.25rem; color: #9CA3AF; margin: 0.75rem 0 1.5rem 0; max-width: 700px; line-height: 1.6;">
      Full Stack Developer | AI/ML Enthusiast | DevOps Engineer
    </p>
  </div>

  <!-- Profile Banner -->
  <div style="position: relative; margin: 2rem 0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);">
    <img src="https://raw.githubusercontent.com/NareshRana1999/NareshRana/main/assets/images/banner.svg" alt="Banner" width="100%" style="display: block;"/>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5rem; background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <img src="https://avatars.githubusercontent.com/u/your-profile-id" alt="Profile" width="80" height="80" style="border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);"/>
        <div>
          <h2 style="color: white; margin: 0; font-size: 1.5rem;">Naresh Rana</h2>
          <p style="color: #E5E7EB; margin: 0.25rem 0 0 0; font-size: 0.95rem;">Building digital experiences that matter</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Buttons -->
  <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 0.75rem; margin: 2rem 0;">
    <a href="https://wa.me/916363830414" target="_blank" class="contact-btn" style="--bg: #25D366; --hover-bg: #128C7E;">
      <i class="fab fa-whatsapp"></i>
      <span>WhatsApp</span>
    </a>
    <a href="mailto:nareshrana1999@outlook.com" target="_blank" class="contact-btn" style="--bg: #0078D4; --hover-bg: #106EBE;">
      <i class="fas fa-envelope"></i>
      <span>Email</span>
    </a>
    <a href="https://github.com/NareshRana1999" target="_blank" class="contact-btn" style="--bg: #1F2937; --hover-bg: #111827;">
      <i class="fab fa-github"></i>
      <span>GitHub</span>
    </a>
    <a href="https://www.linkedin.com/in/naresh-rana-1b3b3b1b3/" target="_blank" class="contact-btn" style="--bg: #0A66C2; --hover-bg: #0747A6;">
      <i class="fab fa-linkedin-in"></i>
      <span>LinkedIn</span>
    </a>
  </div>

  <!-- Stats & Spotify Player -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2.5rem 0;">
    <!-- Stats Card -->
    <div class="card" style="--accent: #8B5CF6;">
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
        <div class="icon-box" style="background: rgba(139, 92, 246, 0.1);">
          <i class="fas fa-chart-line" style="color: #8B5CF6;"></i>
        </div>
        <h3 style="margin: 0; color: #F9FAFB;">GitHub Stats</h3>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="stat-box">
          <div class="stat-value" id="repo-count">24</div>
          <div class="stat-label">Repositories</div>
        </div>
        <div class="stat-box">
          <div class="stat-value" id="commit-count">1.2k</div>
          <div class="stat-label">Commits</div>
        </div>
        <div class="stat-box">
          <div class="stat-value" id="star-count">156</div>
          <div class="stat-label">Stars</div>
        </div>
        <div class="stat-box">
          <div class="stat-value" id="follower-count">89</div>
          <div class="stat-label">Followers</div>
        </div>
      </div>
    </div>

    <!-- Spotify Player -->
    <div class="card" style="--accent: #1DB954;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="icon-box" style="background: rgba(29, 185, 84, 0.1);">
            <i class="fab fa-spotify" style="color: #1DB954;"></i>
          </div>
          <h3 style="margin: 0; color: #F9FAFB;">Now Playing</h3>
        </div>
        <div style="font-size: 0.8rem; color: #9CA3AF; display: flex; align-items: center; gap: 0.25rem;">
          <i class="fas fa-headphones"></i>
          <span>Spotify</span>
        </div>
      </div>
      
      <div id="spotify-player">
        <div style="display: flex; gap: 1rem; margin-bottom: 1.25rem;">
          <img id="album-art" src="https://i.scdn.co/image/ab67616d0000b273f3ea9db6f063f9b72c4b83f5" alt="Album Art" width="80" height="80" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);"/>
          <div style="flex: 1; min-width: 0;">
            <h4 id="song-title" style="margin: 0 0 0.25rem 0; color: #F9FAFB; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Blinding Lights</h4>
            <p id="artist-name" style="margin: 0; color: #9CA3AF; font-size: 0.9rem;">The Weeknd</p>
            
            <div style="margin-top: 1rem; position: relative;">
              <div style="height: 4px; background: rgba(255, 255, 255, 0.1); border-radius: 2px; overflow: hidden;">
                <div id="progress-bar" style="width: 45%; height: 100%; background: #1DB954; border-radius: 2px; position: relative; overflow: hidden;">
                  <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent); animation: shimmer 2s infinite;"></div>
                </div>
              </div>
              <div style="display: flex; justify-content: space-between; margin-top: 0.5rem;">
                <span id="current-time" style="font-size: 0.7rem; color: #6B7280;">1:23</span>
                <span id="duration" style="font-size: 0.7rem; color: #6B7280;">3:45</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 0.5rem;">
          <button class="player-btn" id="prev-btn">
            <i class="fas fa-step-backward"></i>
          </button>
          <button class="player-btn" id="play-btn" style="background: #1DB954; width: 40px; height: 40px; border-radius: 50%;">
            <i class="fas fa-pause"></i>
          </button>
          <button class="player-btn" id="next-btn">
            <i class="fas fa-step-forward"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- About Me Section -->
  <div class="card" style="--accent: #3B82F6; margin: 2rem 0;">
    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
      <div class="icon-box" style="background: rgba(59, 130, 246, 0.1);">
        <i class="fas fa-user" style="color: #3B82F6;"></i>
      </div>
      <h2 style="margin: 0; color: #F9FAFB;">About Me</h2>
    </div>
    
    <p style="color: #E5E7EB; line-height: 1.7; margin: 0 0 1.5rem 0;">
      I'm a passionate Full Stack Developer with expertise in building scalable web applications and implementing AI/ML solutions. 
      With a strong foundation in Computer Science and hands-on experience in modern technologies, I love turning complex problems 
      into simple, beautiful, and intuitive solutions.
    </p>
    
    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem;">
      <span class="tag" style="--tag-bg: rgba(59, 130, 246, 0.1); --tag-color: #3B82F6;">
        <i class="fas fa-code"></i>
        <span>Full-Stack Development</span>
      </span>
      <span class="tag" style="--tag-bg: rgba(16, 185, 129, 0.1); --tag-color: #10B981;">
        <i class="fas fa-brain"></i>
        <span>AI/ML Engineering</span>
      </span>
      <span class="tag" style="--tag-bg: rgba(139, 92, 246, 0.1); --tag-color: #8B5CF6;">
        <i class="fas fa-server"></i>
        <span>DevOps & Cloud</span>
      </span>
    </div>
  </div>

  <!-- Tech Stack Section -->
  <div style="margin: 3rem 0;">
    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
      <div style="width: 6px; height: 28px; background: linear-gradient(to bottom, #EC4899, #F59E0B); border-radius: 3px;"></div>
      <h2 style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #F9FAFB;">Tech Stack</h2>
    </div>
    
    <p style="color: #9CA3AF; margin-bottom: 1.5rem; line-height: 1.6;">
      Here are the technologies and tools I work with on a daily basis. Hover over each card to see more details.
    </p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; margin-top: 2rem;">
      <!-- Frontend Technologies -->
      <div class="tech-card" style="--card-bg: rgba(59, 130, 246, 0.03); --card-border: rgba(59, 130, 246, 0.1);">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: rgba(59, 130, 246, 0.1);">
            <i class="fas fa-laptop-code" style="color: #3B82F6;"></i>
          </div>
          <h3>Frontend</h3>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">React</span>
          <span class="tech-tag">Next.js</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">Tailwind CSS</span>
          <span class="tech-tag">Redux</span>
        </div>
      </div>
      
      <!-- Backend Technologies -->
      <div class="tech-card" style="--card-bg: rgba(16, 185, 129, 0.03); --card-border: rgba(16, 185, 129, 0.1);">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: rgba(16, 185, 129, 0.1);">
            <i class="fas fa-server" style="color: #10B981;"></i>
          </div>
          <h3>Backend</h3>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">Express</span>
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Django</span>
          <span class="tech-tag">Flask</span>
        </div>
      </div>
      
      <!-- Database Technologies -->
      <div class="tech-card" style="--card-bg: rgba(139, 92, 246, 0.03); --card-border: rgba(139, 92, 246, 0.1);">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: rgba(139, 92, 246, 0.1);">
            <i class="fas fa-database" style="color: #8B5CF6;"></i>
          </div>
          <h3>Database</h3>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">MongoDB</span>
          <span class="tech-tag">PostgreSQL</span>
          <span class="tech-tag">Firebase</span>
          <span class="tech-tag">Redis</span>
        </div>
      </div>
      
      <!-- DevOps & Cloud -->
      <div class="tech-card" style="--card-bg: rgba(236, 72, 153, 0.03); --card-border: rgba(236, 72, 153, 0.1);">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: rgba(236, 72, 153, 0.1);">
            <i class="fas fa-cloud" style="color: #EC4899;"></i>
          </div>
          <h3>DevOps & Cloud</h3>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">Docker</span>
          <span class="tech-tag">Kubernetes</span>
          <span class="tech-tag">AWS</span>
          <span class="tech-tag">Azure</span>
          <span class="tech-tag">CI/CD</span>
        </div>
      </div>
      
      <!-- AI/ML -->
      <div class="tech-card" style="--card-bg: rgba(245, 158, 11, 0.03); --card-border: rgba(245, 158, 11, 0.1);">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: rgba(245, 158, 11, 0.1);">
            <i class="fas fa-brain" style="color: #F59E0B;"></i>
          </div>
          <h3>AI/ML</h3>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">TensorFlow</span>
          <span class="tech-tag">PyTorch</span>
          <span class="tech-tag">scikit-learn</span>
          <span class="tech-tag">OpenCV</span>
          <span class="tech-tag">NLP</span>
        </div>
      </div>
      
      <!-- Tools -->
      <div class="tech-card" style="--card-bg: rgba(59, 130, 246, 0.03); --card-border: rgba(59, 130, 246, 0.1);">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: rgba(59, 130, 246, 0.1);">
            <i class="fas fa-tools" style="color: #3B82F6;"></i>
          </div>
          <h3>Tools</h3>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">Git</span>
          <span class="tech-tag">VS Code</span>
          <span class="tech-tag">Postman</span>
          <span class="tech-tag">Jira</span>
          <span class="tech-tag">Figma</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Projects Section -->
  <div style="margin: 4rem 0;">
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div style="width: 6px; height: 28px; background: linear-gradient(to bottom, #3B82F6, #8B5CF6); border-radius: 3px;"></div>
        <h2 style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #F9FAFB;">Featured Projects</h2>
      </div>
      <a href="https://github.com/NareshRana1999?tab=repositories" target="_blank" style="color: #3B82F6; text-decoration: none; font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>View All</span>
        <i class="fas fa-arrow-right" style="transition: transform 0.3s ease;"></i>
      </a>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
      <!-- Project 1 -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-icon" style="background: rgba(59, 130, 246, 0.1);">
            <i class="fas fa-laptop-code" style="color: #3B82F6;"></i>
          </div>
          <div class="project-links">
            <a href="#" class="project-link" title="View Code">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="project-link" title="Live Demo">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <h3 class="project-title">Portfolio Website</h3>
        <p class="project-desc">A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills.</p>
        <div class="project-tags">
          <span class="project-tag">React</span>
          <span class="project-tag">Tailwind CSS</span>
          <span class="project-tag">Framer Motion</span>
        </div>
      </div>
      
      <!-- Project 2 -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-icon" style="background: rgba(16, 185, 129, 0.1);">
            <i class="fas fa-robot" style="color: #10B981;"></i>
          </div>
          <div class="project-links">
            <a href="#" class="project-link" title="View Code">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="project-link" title="Live Demo">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <h3 class="project-title">AI Chatbot</h3>
        <p class="project-desc">An intelligent chatbot powered by GPT-3 that can answer questions and engage in natural conversations.</p>
        <div class="project-tags">
          <span class="project-tag">Python</span>
          <span class="project-tag">OpenAI API</span>
          <span class="project-tag">Flask</span>
        </div>
      </div>
      
      <!-- Project 3 -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-icon" style="background: rgba(139, 92, 246, 0.1);">
            <i class="fas fa-shopping-cart" style="color: #8B5CF6;"></i>
          </div>
          <div class="project-links">
            <a href="#" class="project-link" title="View Code">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="project-link" title="Live Demo">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <h3 class="project-title">E-commerce Platform</h3>
        <p class="project-desc">A full-featured e-commerce platform with user authentication, product catalog, and payment integration.</p>
        <div class="project-tags">
          <span class="project-tag">MERN Stack</span>
          <span class="project-tag">Redux</span>
          <span class="project-tag">Stripe</span>
        </div>
      </div>
    </div>
  </div>

  <!-- GitHub Stats -->
  <div style="margin: 4rem 0;">
    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
      <div style="width: 6px; height: 28px; background: linear-gradient(to bottom, #EC4899, #F59E0B); border-radius: 3px;"></div>
      <h2 style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #F9FAFB;">GitHub Statistics</h2>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem; margin-top: 1.5rem;">
      <img src="https://github-readme-stats.vercel.app/api?username=NareshRana&show_icons=true&theme=radical&count_private=true" alt="GitHub Stats" style="width: 100%; border-radius: 10px;"/>
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=NareshRana&theme=radical" alt="GitHub Streak" style="width: 100%; border-radius: 10px;"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=NareshRana&layout=compact&theme=radical" alt="Top Languages" style="width: 100%; border-radius: 10px;"/>
    </div>
  </div>

  <!-- Footer -->
  <div style="margin: 3rem 0; text-align: center; color: #6B7280; font-size: 0.9rem;">
    <p>Made with <i class="fas fa-heart" style="color: #EC4899;"></i> by Naresh Rana</p>
    <div style="display: flex; justify-content: center; gap: 1.5rem; margin-top: 1rem;">
      <a href="https://github.com/NareshRana1999" target="_blank" style="color: #9CA3AF; text-decoration: none; transition: color 0.2s ease;">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" style="color: #9CA3AF; text-decoration: none; transition: color 0.2s ease;">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/in/naresh-rana-1b3b3b1b3/" target="_blank" style="color: #9CA3AF; text-decoration: none; transition: color 0.2s ease;">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://dev.to/yourusername" target="_blank" style="color: #9CA3AF; text-decoration: none; transition: color 0.2s ease;">
        <i class="fab fa-dev"></i>
      </a>
    </div>
    <p style="margin-top: 1.5rem; font-size: 0.8rem; color: #4B5563;">
      © 2025 Naresh Rana. All rights reserved.
    </p>
  </div>
</div>

<!-- Add this style section at the bottom of your README -->
<style>
  /* Base Styles */
  :root {
    --primary: #3B82F6;
    --primary-dark: #2563EB;
    --secondary: #8B5CF6;
    --success: #10B981;
    --danger: #EF4444;
    --warning: #F59E0B;
    --info: #06B6D4;
    --dark: #1F2937;
    --light: #F9FAFB;
    --gray-100: #F3F4F6;
    --gray-200: #E5E7EB;
    --gray-300: #D1D5DB;
    --gray-400: #9CA3AF;
    --gray-500: #6B7280;
    --gray-600: #4B5563;
    --gray-700: #374151;
    --gray-800: #1F2937;
    --gray-900: #111827;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --rounded-sm: 0.25rem;
    --rounded: 0.5rem;
    --rounded-md: 0.75rem;
    --rounded-lg: 1rem;
    --rounded-xl: 1.5rem;
    --rounded-full: 9999px;
  }

  /* Typography */
  body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    color: var(--gray-200);
    background-color: #0F172A;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: var(--light);
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 1.875rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }
  h5 { font-size: 1.125rem; }
  h6 { font-size: 1rem; }

  p {
    margin: 0 0 1rem 0;
    color: var(--gray-300);
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--primary-dark);
  }

  /* Components */
  .card {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--rounded-lg);
    padding: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--accent, var(--primary));
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .icon-box {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--primary);
    transition: all 0.3s ease;
  }

  .stat-box {
    text-align: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.02);
    border-radius: var(--rounded);
    transition: all 0.3s ease;
  }

  .stat-box:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--light);
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.75rem;
    color: var(--gray-400);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    border-radius: var(--rounded-full);
    background: var(--bg, var(--primary));
    color: white;
    font-weight: 500;
    font-size: 0.9375rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .contact-btn:hover {
    background: var(--hover-bg, var(--primary-dark));
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.75rem;
    border-radius: var(--rounded-full);
    background: var(--tag-bg, rgba(59, 130, 246, 0.1));
    color: var(--tag-color, var(--primary));
    font-size: 0.75rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .tag i {
    font-size: 0.75rem;
  }

  .tag:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
  }

  /* Tech Cards */
  .tech-card {
    background: var(--card-bg, rgba(30, 41, 59, 0.5));
    border: 1px solid var(--card-border, rgba(255, 255, 255, 0.05));
    border-radius: var(--rounded-lg);
    padding: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .tech-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .tech-card-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .tech-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    background: rgba(255, 255, 255, 0.05);
    color: var(--gray-200);
    padding: 0.25rem 0.75rem;
    border-radius: var(--rounded-full);
    font-size: 0.75rem;
    transition: all 0.2s ease;
  }

  .tech-tag:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  /* Project Cards */
  .project-card {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--rounded-lg);
    padding: 1.5rem;
    transition: all 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .project-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .project-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }

  .project-links {
    display: flex;
    gap: 0.5rem;
  }

  .project-link {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    color: var(--gray-400);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .project-link:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
  }

  .project-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: var(--light);
  }

  .project-desc {
    font-size: 0.875rem;
    color: var(--gray-400);
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .project-tag {
    background: rgba(59, 130, 246, 0.1);
    color: var(--primary);
    padding: 0.25rem 0.75rem;
    border-radius: var(--rounded-full);
    font-size: 0.75rem;
    transition: all 0.2s ease;
  }

  .project-tag:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: translateY(-1px);
  }

  /* Animations */
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.25rem; }
    
    .contact-buttons {
      flex-direction: column;
      align-items: stretch;
    }
    
    .contact-btn {
      justify-content: center;
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }
</style>
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
</style>
