using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GTI350TP4.Models
{
    public class ConfigurationViewModel
    {
        [Required]
        [Display(Name = "Titre de la configuration")]
        public string configName { get; set; }

        [Display(Name = "Description")]
        public string description { get; set; }

        [Required]
        [Display(Name = "Nom utilisateur")]
        public string userName { get; set; }

        [Display(Name = "Résumé")]
        public string summary { get; set; }

        [Display(Name = "Prix maximum")]
        public string maxPrice { get; set; }
    }

}
