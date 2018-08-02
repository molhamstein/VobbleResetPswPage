import { FuseSplashScreenService } from './core/services/splash-screen.service';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {FuseConfigService} from "./core/services/config.service";
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "./auth.service";
import {MatSnackBar} from "@angular/material";


@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  registerFormErrors: any;
  access_token: string;

  constructor(
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private loadingScreen: FuseSplashScreenService) {


    this.registerFormErrors = {
      password: {required: true, minlength: true},
      passwordConfirm: {required: true},
      email: {required: true},
    };

    this.route.queryParams.subscribe(params => {
      this.access_token = params['access_token'];
      console.log(this.access_token);
    });

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordConfirm:  new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),

      }, {validator: this.checkIfMatchingPasswords('password', 'passwordConfirm')}
    );
    this.registerForm.valueChanges.subscribe(() => {
      this.onRegisterFormValuesChanged();
    });
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    console.log('passwordConfirmationKey');
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
        passwordConfirmationInput.setErrors({notEquivalent: false});
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  onRegisterFormValuesChanged() {
    for (const field in this.registerFormErrors) {
      if (!this.registerFormErrors.hasOwnProperty(field)) {
        continue;
      }

      this.registerFormErrors[field] = {};

      const control = this.registerForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.registerFormErrors[field] = control.errors;
      }
    }
  }

  onSubmit() {
    console.log('submit');
    this.authService.reset_password(this.registerForm.value, this.access_token).then(
      (data) => {
        console.log("data ", data);
        this.snackBar.open('Reset password succeed', '', {
          duration: 2000,
        });
        //this.router.navigate(['auth/login']);
        //this.helpers.showActionSnackbar(null, false, '', "Registration succeed");
        this.loadingScreen.hide();
      }, (reason) => {
        //this.helpers.showActionSnackbar(null, false, '', {style: 'failed-snackbar'}, "Registration failed");
        this.snackBar.open('Reset password failed', '', {
          duration: 2000,
        });
        this.loadingScreen.hide();
        console.log('error ', reason);
      }
    )
  }
}

