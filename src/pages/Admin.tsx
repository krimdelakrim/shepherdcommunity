import Section from "../components/Section";
import { DEFAULT_CONTENT } from "../content";
import type { SiteContent } from "../content";
import { useEffect, useMemo, useState } from "react";

const KEY = "shepherdcommunity_site_content_v1";

function load(): SiteContent {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_CONTENT;
    return { ...DEFAULT_CONTENT, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_CONTENT;
  }
}

function save(c: SiteContent) {
  localStorage.setItem(KEY, JSON.stringify(c));
}

export default function Admin() {
  const initial = useMemo(() => load(), []);
  const [content, setContent] = useState<SiteContent>(initial);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!saved) return;
    const t = setTimeout(() => setSaved(false), 1500);
    return () => clearTimeout(t);
  }, [saved]);

  return (
    <div className="container">
      <Section title="Admin Quick Edits" eyebrow="Local edits (per browser)">
        <p className="muted">
          This page saves edits to your browser LocalStorage (not global). Later we can connect
          forms/content to Google Sheets or a backend.
        </p>

        <div className="form">
          <label className="field">
            <span className="field__label">Tagline</span>
            <input
              className="input"
              value={content.tagline}
              onChange={(e) => setContent({ ...content, tagline: e.target.value })}
            />
          </label>

          <label className="field">
            <span className="field__label">Mission</span>
            <textarea
              className="textarea"
              rows={6}
              value={content.mission}
              onChange={(e) => setContent({ ...content, mission: e.target.value })}
            />
          </label>

          <label className="field">
            <span className="field__label">Motto</span>
            <input
              className="input"
              value={content.motto}
              onChange={(e) => setContent({ ...content, motto: e.target.value })}
            />
          </label>

          <div className="row">
            <button
              className="btn btn--primary"
              type="button"
              onClick={() => {
                save(content);
                setSaved(true);
              }}
            >
              Save Changes
            </button>

            {saved ? <span className="pill">Saved</span> : null}

            <button
              className="btn btn--ghost"
              type="button"
              onClick={() => {
                localStorage.removeItem(KEY);
                setContent(DEFAULT_CONTENT);
                setSaved(true);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

