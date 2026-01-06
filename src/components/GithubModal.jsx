import { useEffect, useState } from "react";

function GithubModal() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  return (
    <div className="modal fade" id="githubModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white">
          
          <div className="modal-header">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body text-center">
            {profile ? (
              <>
                <img
                  src={profile.avatar_url}
                  alt="GitHub"
                  className="rounded-circle mb-3"
                  width="120"
                />
                <h5>{profile.name}</h5>
                <p>{profile.bio}</p>
                <p>Repositories : {profile.public_repos}</p>
                <p>Followers : {profile.followers}</p>
                <p>Following : {profile.following}</p>
              </>
            ) : (
              <p>Chargement...</p>
            )}
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default GithubModal;
