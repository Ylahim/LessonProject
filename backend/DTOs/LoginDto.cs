﻿using System.ComponentModel.DataAnnotations;

namespace backend.DTOs
{
    public class LoginDto
    {
        [Required]
        public string EmailUsername { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
