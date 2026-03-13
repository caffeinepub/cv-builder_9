import Array "mo:core/Array";
import List "mo:core/List";

actor {
  type CV = {
    fullName : Text;
    jobTitle : Text;
    summary : Text;
    email : Text;
    phone : Text;
    location : Text;
    website : Text;
    education : [EducationEntry];
    experience : [ExperienceEntry];
    skills : [Text];
    selectedTemplate : Nat;
  };

  type EducationEntry = {
    degree : Text;
    school : Text;
    year : Text;
    description : Text;
  };

  type ExperienceEntry = {
    role : Text;
    company : Text;
    dateRange : Text;
    description : Text;
  };

  var cv : ?CV = null;

  public shared ({ caller }) func updateCV(
    fullName : Text,
    jobTitle : Text,
    summary : Text,
    email : Text,
    phone : Text,
    location : Text,
    website : Text,
    education : [EducationEntry],
    experience : [ExperienceEntry],
    skills : [Text]
  ) : async () {
    let newCV : CV = {
      fullName;
      jobTitle;
      summary;
      email;
      phone;
      location;
      website;
      education;
      experience;
      skills;
      selectedTemplate = switch (cv) {
        case (null) { 1 };
        case (?existingCV) { existingCV.selectedTemplate };
      };
    };
    cv := ?newCV;
  };

  public shared ({ caller }) func selectTemplate(templateId : Nat) : async () {
    if (templateId < 1 or templateId > 5) {
      return;
    };

    switch (cv) {
      case (null) {
        cv := ?{
          fullName = "";
          jobTitle = "";
          summary = "";
          email = "";
          phone = "";
          location = "";
          website = "";
          education = [];
          experience = [];
          skills = [];
          selectedTemplate = templateId;
        };
      };
      case (?existingCV) {
        cv := ?{
          existingCV with selectedTemplate = templateId;
        };
      };
    };
  };

  public query ({ caller }) func getCV() : async ?CV {
    cv;
  };

  public query ({ caller }) func getSelectedTemplate() : async Nat {
    switch (cv) {
      case (null) { 1 };
      case (?existingCV) { existingCV.selectedTemplate };
    };
  };
};
