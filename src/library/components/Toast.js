/* global $ */
class Toast {
  static _defaultConfig = {
    icon: null,
    text: '',
    style: 'default',
    timeout: 0
  };
  static show(config) {
    const _config = { ...this._defaultConfig, ...config };
    const element = this._createToast(_config);

    const currentToast = $('.toast');

    const _open = () => {
      this._insertToastIntoDom(element);
      this._showToast(element);
    };

    if (currentToast.length > 0) {
      this._closeToast(currentToast, _open);
    } else {
      _open();
    }
    if (_config.timeout > 0) {
      this._setTimer(element, _config.timeout);
    }
  }

  static _createToast(config) {
    const template = `
    <div class="toast toast-${config.style}">
      <div class="toast-icon">
        <i class="fa fa-${config.icon}"></i>
      </div>
      <div class="toast-content">
        ${config.text}
      </div>
      <div class="toast-dismiss">
        <i role="close" class="fa fa-times"></i>
      </div>
    </div>
    `;
    const $toast = $(template);
    return $toast;
  }

  static _setToastTimeout($toast, timeout) {
    return setTimeout(() => {
      this._closeToast($toast);
    }, timeout * 1000);
  }

  static _setTimer($toast, timeout) {
    let timerId = this._setToastTimeout($toast, timeout);
    $toast.on('mouseenter', () => {
      clearTimeout(timerId);
    });
    $toast.on('mouseleave', () => {
      timerId = this._setToastTimeout($toast, timeout);
    });
  }

  static _insertToastIntoDom($toast) {
    $('.app > .app-content').prepend($toast);
    $toast.find('[role="close"]').on('click', () => {
      this._closeToast($toast);
    });
  }

  static _showToast($toast) {
    setTimeout(() => {
      $toast.addClass('toast-opened');
    }, 50);
  }

  static _closeToast($toast, onClose) {
    $toast.removeClass('toast-opened');
    setTimeout(() => {
      $toast.remove();
      (onClose||(()=>{}))();
    }, 200);
  }
}

export default Toast;