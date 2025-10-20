

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const MediaPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<'videos' | 'podcasts'>('videos');

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/yourhandle', icon: 'twitter', color: '#1DA1F2' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: 'linkedin', color: '#0077B5' },
    { name: 'YouTube', href: 'https://youtube.com/@yourchannel', icon: 'youtube', color: '#FF0000' },
    { name: 'Spotify', href: 'https://open.spotify.com/show/yourshow', icon: 'spotify', color: '#1DB954' },
    { name: 'Instagram', href: 'https://instagram.com/yourhandle', icon: 'instagram', color: '#E4405F' }
  ];

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'The Art of Entrepreneurship',
      duration: '12:45'
    },
    {
      id: '3JZ_D3ELwOQ',
      title: 'Building Your Personal Brand',
      duration: '8:32'
    }
  ];

  const podcasts = [
    {
      title: 'Episode 1: Mindset Mastery',
      description: 'Unlocking the psychology behind successful entrepreneurs',
      platforms: [
        { name: 'Spotify', url: 'https://open.spotify.com/episode/1' },
        { name: 'Apple', url: 'https://podcasts.apple.com/episode/1' }
      ]
    },
    {
      title: 'Episode 2: Scaling Secrets',
      description: 'From startup to scale-up: Proven growth frameworks',
      platforms: [
        { name: 'Spotify', url: 'https://open.spotify.com/episode/2' },
        { name: 'Apple', url: 'https://podcasts.apple.com/episode/2' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className="relative">
      {/* HERO SECTION - PROFILE FIRST & CENTERED */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110rem_60rem_at_50%_-20%,hsl(280_90%_60%/.12),transparent)]" />
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          
          {/* PROFILE PICTURE - CENTER OF ATTENTION */}
          <div className="mx-auto mb-12">
            <div className="relative inline-block">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl border-8 border-white/20 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden shadow-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 animate-pulse"></div>
                <div className="relative z-10 flex items-center justify-center h-full p-6">
                  <img 
                    src="https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=You" 
                    alt="Profile" 
                    className="w-full h-full max-w-[85%] max-h-[85%] rounded-2xl object-cover border-4 border-white/40 shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=You";
                    }}
                  />
                </div>
              </div>
              
              {/* NAME & TITLE - Right Below Picture */}
              <div className="mt-8">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                  YOUR NAME
                </h1>
                <p className="text-xl md:text-2xl text-[hsl(var(--ink-dim))] font-medium">
                  Entrepreneur • Creator • Investor
                </p>
              </div>
            </div>
          </div>

          {/* HERO CONTENT BELOW */}
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6 block mx-auto">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
              Media Hub
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Videos, podcasts,{' '}
              <span className="text-[hsl(var(--primary))]">and live conversations</span>
            </h2>

            <p className="text-xl text-[hsl(var(--ink-dim))] mb-8 leading-relaxed">
              Entrepreneurship insights, creator economy strategies, and personal growth conversations delivered across your favorite platforms.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="#videos" className="btn btn-primary text-lg px-8 py-4">Watch Videos</Link>
              <Link href="#podcasts" className="btn btn-secondary text-lg px-8 py-4">Listen Now</Link>
              <a href="#connect" className="btn btn-ghost text-lg px-8 py-4">Connect</a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-3 py-1">500K+ views</span>
              <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-3 py-1">Active community</span>
              <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-3 py-1">Weekly updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[hsl(var(--border))] py-4">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-center gap-4">
            <button 
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'videos' 
                  ? 'bg-[hsl(var(--primary))] text-white shadow-lg' 
                  : 'text-[hsl(var(--ink))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]'
              }`}
              onClick={() => setActiveTab('videos')}
            >
              📺 Videos
            </button>
            <button 
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'podcasts' 
                  ? 'bg-[hsl(var(--primary))] text-white shadow-lg' 
                  : 'text-[hsl(var(--ink))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]'
              }`}
              onClick={() => setActiveTab('podcasts')}
            >
              🎙️ Podcasts
            </button>
          </div>
        </div>
      </section>

      {/* VIDEOS SECTION */}
      {activeTab === 'videos' && (
        <section id="videos" className="mx-auto max-w-7xl px-4 py-14 animate-on-scroll">
          <header className="mx-auto max-w-2xl text-center mb-12">
            <p className="section-title">Featured Videos</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Latest episodes & insights</h2>
            <p className="mt-2 text-[hsl(var(--ink-dim))]">Watch my most recent content and get inspired to take action</p>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {videos.map((video, index) => (
              <article key={video.id} className="group">
                <div className="relative overflow-hidden rounded-xl border bg-white shadow-card aspect-video">
                  <iframe
                    className="h-full w-full rounded-lg"
                    loading="lazy"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    referrerPolicy="no-referrer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                  <div className="absolute -bottom-10 right-4 bg-gradient-to-t from-black/80 to-transparent rounded-xl p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-medium">{video.duration}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-base font-semibold mb-2">{video.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-[hsl(var(--ink-dim))]">
                    <span>1.2M views</span>
                    <span>•</span>
                    <span>2 days ago</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* PODCASTS SECTION */}
      {activeTab === 'podcasts' && (
        <section id="podcasts" className="mx-auto max-w-7xl px-4 py-14 animate-on-scroll">
          <header className="mx-auto max-w-2xl text-center mb-12">
            <p className="section-title">Latest Episodes</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Deep conversations</h2>
            <p className="mt-2 text-[hsl(var(--ink-dim))]">In-depth discussions with world-class leaders and creators</p>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {podcasts.map((podcast, index) => (
              <article key={index} className="card p-6 animate-on-scroll">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold">{podcast.title}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-800 px-3 py-1 text-xs font-medium">
                    NEW
                  </span>
                </div>
                <p className="text-[hsl(var(--ink-dim))] mb-6">{podcast.description}</p>
                <div className="flex flex-wrap gap-2">
                  {podcast.platforms.map((platform, pIndex) => (
                    <a 
                      key={pIndex} 
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary text-xs px-4 py-2"
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm text-[hsl(var(--ink-dim))]">
                  <span>⭐ 4.9</span>
                  <span>•</span>
                  <span>2.1M listens</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SOCIAL CONNECTIONS */}
      <section id="connect" className="mx-auto max-w-7xl px-4 py-14 animate-on-scroll">
        <header className="mx-auto max-w-2xl text-center mb-12">
          <p className="section-title">Connect</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Follow across platforms</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">Join the conversation and stay updated with fresh content</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-5">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group card p-6 text-center hover:shadow-xl transition-all"
              style={{ '--icon-color': link.color } as React.CSSProperties}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[hsl(var(--muted))] group-hover:bg-gradient-to-r group-hover:from-[var(--icon-color)]/10 group-hover:to-transparent p-4 transition-all">
                <div className={`w-8 h-8 mx-auto social-icon ${link.icon} opacity-70 group-hover:opacity-100 transition-all`}></div>
              </div>
              <h3 className="font-semibold mb-2">{link.name}</h3>
              <p className="text-xs text-[hsl(var(--ink-dim))] group-hover:text-[hsl(var(--primary))] transition-colors">Follow</p>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="mx-auto max-w-4xl px-4 py-16 animate-on-scroll">
        <div className="card p-8">
          <div className="text-center mb-8">
            <p className="section-title">Get In Touch</p>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight">Ready to collaborate?</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-4 lg:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="input"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="input"
                required
              />
            </div>
            <textarea
              placeholder="Tell me about your idea, collaboration, or question..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="input"
              required
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn btn-primary w-full lg:w-auto justify-self-center"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100rem_45rem_at_50%_-20%,hsl(280_90%_60%/.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="card flex flex-col items-center gap-4 p-8 text-center">
            <p className="section-title">Stay Connected</p>
            <h2 className="text-2xl font-extrabold tracking-tight max-w-2xl">One video or podcast episode can change your trajectory</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="#videos" className="btn btn-primary">Watch Latest Video</Link>
              <Link href="#podcasts" className="btn btn-secondary">Listen to Podcast</Link>
              <Link href="#connect" className="btn btn-ghost">Follow Me</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .social-icon {
          width: 100%;
          height: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: grayscale(100%);
          transition: all 0.3s ease;
          mask-size: contain;
          -webkit-mask-size: contain;
        }
        
        .social-icon.twitter { 
          mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23fff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>');
          -webkit-mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23fff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>');
          background-color: var(--icon-color);
        }
        
        .social-icon.linkedin { 
          mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23fff" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/></svg>');
          -webkit-mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23fff" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/></svg>');
          background-color: var(--icon-color);
        }
        
        .social-icon.youtube { 
          mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23fff" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.129 8.349 4.227 8.9 3.841.463 5.916 2.9 5.998 4.108 0 0 0 6.994.001 6.994a9.389 9.389 0 002.643.52c2.367 0 3.044-1.308 3.044-1.308.065-.315.631-.315.696 0 0 0 .001 6.994.001 6.994a9.407 9.407 0 00.713-1.108s1.035-6.994.001-6.994c.082-.207.416-.386.713-.39.108 0 .22.007.327.024.264-.04 1.002-.466 2.643-.52 0 0 .001-6.994.001-6.994a9.407 9.407 0 00.713-1.108s1.035-6.994.001-6.994c.082-.207.416-.386.713-.39.108 0 .22.007.327.024.264.04 1.002.466 2.643.521 0 0 .001-6.994.001-6.994a9.389 9.389 0 002.643.52c.264.04 1.002.466 2.643.52 0 0 .001-6.994.001-6.994a9.407 9.407 0 00.713-1.108s1.035-6.994.001-6.994c.082-.207.416-.386.713-.39.108 0 .22.007.327.024.264.04 1.002.466 2.643.521 0 0 .001-6.994.001-6.994a9.389 9.389 0 002.643.52c3.602.246 4.198-2.343 4.227-8.816.029-6.196-.197-8.55-4.385-8.9z"/></svg>');
          -webkit-mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23fff" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.129 8.349 4.227 8.9 3.841.463 5.916 2.9 5.998 4.108 0 0 0 6.994.001 6.994a9.389 9.389 0 002.643.52c2.367 0 3.044-1.308 3.044-1.308.065-.315.631-.315.696 0 0 0 .001 6.994.001 6.994a9.407 9.407 0 00.713-1.108s1.035-6.994.001-6.994c.082-.207.416-.386.713-.39.108 0 .22.007.327.024.264-.04 1.002-.466 2.643-.52 0 0 .001-6.994.001-6.994a9.407 9.407 0 00.713-1.108s1.035-6.994.001-6.994c.082-.207.416-.386.713-.39.108 0 .22.007.327.024.264.04 1.002.466 2.643.521 0 0 .001-6.994.001-6.994a9.389 9.389 0 002.643.52c.264.04 1.002.466 2.643.52 0 0 .001-6.994.001-6.994a9.407 9.407 0 00.713-1.108s1.035-6.994.001-6.994c.082-.207.416-.386.713-.39.108 0 .22.007.327.024.264.04 1.002.466 2.643.521 0 0 .001-6.994.001-6.994a9.389 9.389 0 002.643.52c3.602.246 4.198-2.343 4.227-8.816.029-6.196-.197-8.55-4.385-8.9z"/></svg>');
          background-color: var(--icon-color);
        }
        
        .social-icon.spotify { 
          mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23fff" d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.44 15.78c-.41-.48-1.05-.71-1.65-.71-.99 0-1.66.61-1.66 1.56 0 .94.67 1.56 1.66 1.56.6 0 1.25-.23 1.65-.71l-.33-.5c-.21.2-.43.31-.66.31-.48 0-.82-.31-.82-.77 0-.46.35-.77.82-.77.23 0 .45.11.66.31l.33-.5zm-6.8 0c-.41-.48-1.05-.71-1.65-.71-.99 0-1.66.61-1.66 1.56 0 .94.67 1.56 1.66 1.56.6 0 1.25-.23 1.65-.71l-.33-.5c-.21.2-.43.31-.66.31-.48 0-.82-.31-.82-.77 0-.46.35-.77.82-.77.23 0 .45.11.66.31l.33-.5zm4.35-9.78h-3.3v9.78h3.3c2.64 0 3.3-1.71 3.3-3.39 0-1.68-.66-3.39-3.3-3.39z"/></svg>');
          -webkit-mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23fff" d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.44 15.78c-.41-.48-1.05-.71-1.65-.71-.99 0-1.66.61-1.66 1.56 0 .94.67 1.56 1.66 1.56.6 0 1.25-.23 1.65-.71l-.33-.5c-.21.2-.43.31-.66.31-.48 0-.82-.31-.82-.77 0-.46.35-.77.82-.77.23 0 .45.11.66.31l.33-.5zm-6.8 0c-.41-.48-1.05-.71-1.65-.71-.99 0-1.66.61-1.66 1.56 0 .94.67 1.56 1.66 1.56.6 0 1.25-.23 1.65-.71l-.33-.5c-.21.2-.43.31-.66.31-.48 0-.82-.31-.82-.77 0-.46.35-.77.82-.77.23 0 .45.11.66.31l.33-.5zm4.35-9.78h-3.3v9.78h3.3c2.64 0 3.3-1.71 3.3-3.39 0-1.68-.66-3.39-3.3-3.39z"/></svg>');
          background-color: var(--icon-color);
        }
        
        .social-icon.instagram { 
          mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23fff" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>');
          -webkit-mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23fff" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>');
          background-color: var(--icon-color);
        }

        .input {
          @apply w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--ink))] placeholder-[hsl(var(--ink-dim))] focus:outline-none focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/10 transition-all;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
};

export default MediaPage;